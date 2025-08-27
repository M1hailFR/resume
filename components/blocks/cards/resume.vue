<template>
  <div class="card">
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
}

const { t } = useTranslation();

const props = defineProps<IFieldsProps<ICardResume>>();
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
        @include above(map.get($grid-breakpoints, xs)) {
          &-tools {
            grid-template-columns: repeat(2, 1fr);
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
}
</style>
