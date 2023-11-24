import { Title as TTitle } from "../api/title/Title";

export const TITLE_TITLE_FIELD = "name";

export const TitleTitle = (record: TTitle): string => {
  return record.name?.toString() || String(record.id);
};
