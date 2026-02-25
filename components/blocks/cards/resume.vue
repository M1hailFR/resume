<template>
  <div class="card" ref="cardRef">
    <v-container>
      <div class="card--wrapper">
        <div class="card--inner rounded-lg shadow-1">
          <div class="card--inner-wrapper">
            <div class="card--inner-wrapper-left">
              <img src="/img/shared/info/mi2.jpg" class="card--avatar" />
              <div>
                <v-title
                  tag="h2"
                  defaultClass="text-title2 mt-2 text-neutrals-1"
                  :title="t(fields.name)"
                />
                <v-title
                  tag="h1"
                  defaultClass="text-body2 text-neutrals-2 mt-1"
                  :title="t(fields.title)"
                />
                <v-title
                  tag="h1"
                  defaultClass="text-body2 text-neutrals-3 mt-3 mb-2"
                  style="max-width: 300px"
                  :title="t(fields.text)"
                />
              </div>

              <div class="card--inner-wrapper-left-group">
                <div
                  class="card--inner-wrapper-left-group-content rounded-lg text-body1"
                  v-for="(list, idx) in fields.lists"
                  :key="idx"
                >
                  <div class="d-none d-md-block card--divider my-1" />
                  <v-title
                    v-if="list.title"
                    tag="h2"
                    defaultClass="text-body2 text-lighter mb-3"
                    :title="t(list.title)"
                  />
                  <v-list :list="list.list" divider customMark />
                </div>
              </div>
            </div>

            <div class="card--inner-wrapper-right">
              <!-- Projects -->
              <VTimeline
                v-if="fields.projects.title"
                :title="t(fields.projects.title)"
                icon="blocks"
                customMark
              >
                <div class="card--inner-wrapper-right-projects">
                  <CardWithImageExample
                    v-for="(list, idx) in fields.projects.list"
                    :key="idx"
                    :title="list.title"
                    :image="list.image || ''"
                    :text="list.text"
                    :site="list.site"
                    :repo="list.repo"
                  />
                </div>
              </VTimeline>

              <!-- Experience -->
              <VTimeline
                v-if="fields.experience.title"
                :title="t(fields.experience.title)"
                icon="blocks"
                customMark
              >
                <VTimeline
                  v-for="(list, idx) in fields.experience.list"
                  :key="idx"
                  :title="list.time"
                  additionalClass="text-body3 mt-sm-2"
                >
                  <CardWithInfo
                    :title="list.title"
                    :text="list.text"
                    :image="list.image"
                    :post="list.post"
                    :time="list.time"
                    :site="list?.site"
                    :min-width="256"
                  />
                </VTimeline>
              </VTimeline>

              <!-- Skills -->
              <VTimeline
                v-if="fields.skills.title"
                :title="t(fields.skills.title)"
                icon="blocks"
                customMark
              >
                <CardWithInfo
                  v-for="(list, idx) in fields.skills.list"
                  :key="idx"
                  :title="list.title"
                  :info="list.info"
                  :min-width="164"
                  :icon="list.icon"
                />
              </VTimeline>

              <!-- Education -->
              <VTimeline :title="t(fields.education.title)" icon="blocks" customMark>
                <div class="card--inner-wrapper-right-education">
                  <CardWithLogo
                    v-for="(list, idx) in fields.education.list"
                    :key="idx"
                    :text="list.text"
                    :logo="list.image"
                    :value="list.title"
                    :time="list.time"
                  />
                </div>
              </VTimeline>

              <!-- Services -->
              <VTimeline
                v-if="fields.services?.title"
                :title="t(fields.services.title)"
                icon="blocks"
                customMark
              >
                <div class="card--inner-wrapper-right-services">
                  <div
                    v-for="(service, idx) in fields.services.list"
                    :key="idx"
                    class="card--service-item"
                  >
                    <div class="card--service-icon">
                      <component :is="getIconByKey(service.icon)" size="32" />
                    </div>
                    <div class="card--service-content">
                      <v-title
                        tag="h3"
                        :title="t(service.title)"
                        defaultClass="text-body1 text-neutrals-1 mb-1"
                      />
                      <v-title
                        tag="p"
                        :title="t(service.text)"
                        defaultClass="text-body3 text-neutrals-3"
                      />
                    </div>
                  </div>
                </div>
              </VTimeline>

              <!-- Tools -->
              <VTimeline :title="t(fields.tools.title)" icon="blocks" customMark>
                <div class="card--inner-wrapper-right-tools">
                  <CardWithLogo
                    v-for="(list, idx) in fields.tools.list"
                    :key="idx"
                    :text="list.text"
                    :logo="list.image"
                    :value="list.title"
                    size="small"
                  />
                </div>
              </VTimeline>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
import { type IFieldsProps } from "~/core/types/components";
import { CardWithLogo, CardWithImageExample, CardWithInfo } from "~/components/shared";
import { useTranslation } from "~/composables/useTranslation";
import { VLink, VBadge, VTitle, VTimeline, VList, type IListItem } from "@/components/ui";
import { getIconByKey } from "~/core/helpers/icons";

defineOptions({
  name: "BlockCardResume",
});

interface ILists {
  title?: string;
  list: IListItem[];
}

interface IResumeData {
  title: string;
  list: IListItem[];
}

interface IServiceItem {
  icon: string;
  title: string;
  text: string;
}

interface IServices {
  title: string;
  list: IServiceItem[];
}

interface ICardResume {
  name: string;
  title: string;
  text: string;
  lists: ILists[];
  projects: IResumeData;
  experience: IResumeData;
  skills: IResumeData;
  education: IResumeData;
  tools: IResumeData;
  services: IServices;
}

const { t } = useTranslation();

const props = defineProps<IFieldsProps<ICardResume>>();

const { $gsap, $ScrollTrigger } = useNuxtApp();

const cardRef = ref(null);

onMounted(() => {
  if (!$gsap || !$ScrollTrigger) return;
  
  const ctx = $gsap.context(() => {
    $gsap.from('.card--inner-wrapper-right > *', {
      scrollTrigger: {
        trigger: '.card',
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
    });
    
    $gsap.from('.card--avatar', {
      scale: 0,
      duration: 0.8,
      ease: 'back.out(1.7)',
    });
    
    $gsap.from('.card--inner-wrapper-left-group > *', {
      scrollTrigger: {
        trigger: '.card--inner-wrapper-left',
        start: 'top 80%',
      },
      x: -30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
    });
  }, cardRef.value);
  
  onUnmounted(() => {
    ctx.revert();
  });
});
</script>

<style lang="scss" scoped>
.card {
  &--inner {
    &-wrapper {
      display: grid;
      @include above(map.get($grid-breakpoints, md)) {
        grid-template-columns: 280px 1fr;
        row-gap: unset;
      }
      &-left {
        transition: 0.3s linear;
        height: fit-content;
        z-index: 10;
        padding-bottom: $spacer * 6;
        &-group {
          width: 100%;
          display: grid;
          margin-top: $spacer * 6;
          grid-template-columns: repeat(1, 1fr);
          gap: $spacer * 4;
          &-content {
            padding: $spacer * 4;
            border: 1px solid get-rgb-color(brand-2, 0.1);
            background-color: get-rgb-color(neutrals-1, 0.02);
          }
        }

        @include above(map.get($grid-breakpoints, sm)) {
          padding: $spacer * 6;
          padding-right: $spacer * 5;
          &-group {
            grid-template-columns: repeat(3, 1fr);
            &-content {
              padding: $spacer * 4;
            }
          }
        }
        @include above(map.get($grid-breakpoints, md)) {
          top: 68px;
          position: sticky;
          &-group {
            width: 100%;
            display: grid;

            margin-top: $spacer * 0;
            grid-template-columns: repeat(1, 1fr);
            gap: $spacer * 4;
            &-content {
              padding: $spacer * 0;
              border: none;
              background-color: get-rgb-color(background);
            }
          }
        }
      }
      &-right {
        // background-color: get-rgb-color(neutrals-4);
        &-projects {
          display: grid;
          gap: $spacer * 4;
        }
        &-education {
          display: grid;
          gap: $spacer * 4;
        }
        &-tools {
          display: grid;
          gap: $spacer * 4;
        }
        &-services {
          display: grid;
          gap: $spacer * 3;
        }
        @include above(map.get($grid-breakpoints, xs)) {
          &-tools {
            grid-template-columns: repeat(2, 1fr);
          }
          &-services {
            grid-template-columns: repeat(1, 1fr);
          }
        }
        @include above(map.get($grid-breakpoints, sm)) {
          padding: $spacer * 6;
          padding-left: $spacer * 5;
          &-projects {
            grid-template-columns: repeat(2, 1fr);
          }
          &-education {
            grid-template-columns: repeat(1, 1fr);
          }
          &-tools {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @include above(map.get($grid-breakpoints, md)) {
          &-education {
            grid-template-columns: repeat(2, 1fr);
          }
          &-tools {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @include above(map.get($grid-breakpoints, lg)) {
          &-education {
            grid-template-columns: repeat(3, 1fr);
          }
          &-tools {
            grid-template-columns: repeat(5, 1fr);
          }
        }
      }
    }
  }
  &--avatar {
    width: 124px;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 50%;
  }
  &--divider {
    height: 1px;
    background-color: get-rgb-color(background);
  }
  &--service-item {
    display: flex;
    gap: $spacer * 3;
    padding: $spacer * 3;
    border: 1px solid get-rgb-color(brand-2, 0.1);
    border-radius: 12px;
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
    
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
      border-color: get-rgb-color(brand-2, 0.3);
    }
  }
  &--service-icon {
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: get-rgb-color(brand-2, 0.1);
    border-radius: 12px;
    color: rgb(var(--v-theme-brand-2));
  }
  &--service-content {
    flex: 1;
    min-width: 0;
  }
}
</style>
