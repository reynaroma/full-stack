async function BlackFridayBanner() {
  const sale = await getActiveSaleByCouponCode('BFRIDAY');

  return (
    <div>
      Black Friday Banner
    </div>
  )
}

export default BlackFridayBanner
