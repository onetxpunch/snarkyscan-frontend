export const formatUSD = (amount) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(typeof amount === "string" ? Number(amount) : amount);

export const formatNum = (amount) =>
  new Intl.NumberFormat("en-US", {}).format(
    typeof amount === "string" ? Number(amount) : amount
  );
