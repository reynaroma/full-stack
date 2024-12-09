import { defineQuery } from "next-sanity";
import { CouponCode } from "./couponCodes";

export const getActiveSaleByCouponCode = async (couponCode: CouponCode) => {
  const ACTIVE_SALE_BY_COUPON_QUERY = defineQuery(`
    *[
      _type == "sale"
      && isActive == true
      && couponCode == $couponCode
    ] | order(validFrom desc) {
      _id,
      title,
      description,
      discountAmount,
      couponCode,
      validFrom,
      validUntil,
      isActive,
    }[0]
    `);
};