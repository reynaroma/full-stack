import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const salesType = defineType({
  name: "sale",
  title: "Sales",
  type: "document",
  icon: TagIcon,
  fields: [],
});