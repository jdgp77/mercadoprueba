import { QUERY_VALUE } from "../options";

export const setQueryValue = value => ({
  type: QUERY_VALUE,
  queryValue: value
});