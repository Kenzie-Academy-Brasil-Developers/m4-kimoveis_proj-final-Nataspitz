import { addressSchema, newAddressSchema } from "./address/address.schema";
import { categorySchema, newCategorySchema } from "./category/category.schema";
import { newRealEstateSchema, realEstateSchema } from "./realEstates/realEstates.schema";
import { newScheduleSchema, scheduleSchema, schedulesValidateSchema } from "./schedule/schedule.schema";
import {
  createUserSchema,
  responseUserSchema,
  userLoginSchema,
  userSchema,
  userReadSchema,
  updateUserSchema
} from "./users/users.schema";

export {
  userSchema,
  createUserSchema,
  responseUserSchema,
  userLoginSchema,
  userReadSchema,
  updateUserSchema,
  categorySchema,
  newCategorySchema,
  realEstateSchema,
  newRealEstateSchema,
  addressSchema,
  newAddressSchema,
  scheduleSchema,
  newScheduleSchema,
  schedulesValidateSchema
};
