import { type IconPropType } from '~/core/types/components'

export interface IListItem {
  icon: IconPropType;
  title: string;
  text?: string;
  link?: string;
  image?: string;
  time?: string;
  post?: string;
  description?: string;
  site?: string;
  repo?: string;
}
