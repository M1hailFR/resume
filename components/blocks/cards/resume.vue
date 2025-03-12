<template>
  <div class="card">
    <v-container>
      <div class="card--wrapper">
        <div class="card--inner rounded-lg shadow-1">
          <div class="card--inner-wrapper">
            <div class="card--inner-wrapper-left">
              <NuxtImg src="/img/shared/info/zoro.jpg" class="card--avatar" />
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
                  defaultClass="text-body2 text-neutrals-3 mt-3"
                  :title="t(fields.text)"
                />
              </div>

              <div class="card--inner-wrapper-left-content">
                <div
                  class="text-body1 d-flex flex-column"
                  v-for="(list, idx) in fields.lists"
                  :key="idx"
                >
                  <div class="card--divider my-3 my-md-4" />
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
                icon="check"
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
                customMark
              >
                <VTimeline
                  v-for="(list, idx) in fields.experience.list"
                  :key="idx"
                  :title="list.time"
                  additionalClass="text-body3 mt-2"
                >
                  <CardWithInfo
                    :title="list.title"
                    :text="list.text"
                    :image="list.image"
                    :post="list.post"
                    :time="list.time"
                  />
                </VTimeline>
              </VTimeline>

              <!-- Skills -->
              <VTimeline title="Skills" icon="check" customMark>
                <div class="d-flex flex-column gap-2">
                  <div>Skills 1</div>
                  <div>Skills 2</div>
                  <div>Skills 3</div>
                </div>
              </VTimeline>
              <VTimeline title="Education" icon="check" customMark>
                <div class="d-flex flex-column gap-2">
                  <div>Education 1</div>
                  <div>Education 2</div>
                  <div>Education 3</div>
                </div>
              </VTimeline>
              <VTimeline title="Tools" icon="check" customMark>
                <div class="d-flex flex-wrap ga-2">
                  <div class="bg-neutrals-1" style="width: 32px; height: 32px">1</div>
                  <div class="bg-neutrals-2" style="width: 32px; height: 32px">2</div>
                  <div class="bg-neutrals-3" style="width: 32px; height: 32px">3</div>
                  <div class="bg-neutrals-4" style="width: 32px; height: 32px">4</div>
                  <div class="bg-neutrals-5" style="width: 32px; height: 32px">5</div>
                  <div class="bg-neutrals-6" style="width: 32px; height: 32px">6</div>
                  <div class="bg-neutrals-7" style="width: 32px; height: 32px">7</div>
                  <div class="bg-brand-1" style="width: 32px; height: 32px">b1</div>
                  <div class="bg-brand-2" style="width: 32px; height: 32px">b2</div>
                  <div class="bg-background" style="width: 32px; height: 32px">bg</div>
                  <div class="bg-danger" style="width: 32px; height: 32px">d</div>
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
import { VLink, VTitle, VTimeline, VList, type IListItem } from "@/components/ui";

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
        display: flex;
        flex-wrap: wrap;
        row-gap: $spacer * 4;
        column-gap: $spacer * 10;

        @include above(map.get($grid-breakpoints, sm)) {
          padding: $spacer * 6;
          padding-right: $spacer * 5;
          &-content {
            width: 100%;
            display: flex;
            flex-wrap: wrap;

            gap: $spacer * 10;
          }
        }
        @include above(map.get($grid-breakpoints, md)) {
          top: 68px;
          position: sticky;
        }
      }
      &-right {
        // background-color: get-rgb-color(neutrals-4);
        &-projects {
          display: grid;
          gap: $spacer * 4;
        }
        @include above(map.get($grid-breakpoints, sm)) {
          padding: $spacer * 6;
          padding-left: $spacer * 5;
          &-projects {
            grid-template-columns: repeat(2, 1fr);
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
  // background-color: get-rgb-color(neutrals-2);
  // color: get-rgb-color(neutrals-1);
}
</style>
