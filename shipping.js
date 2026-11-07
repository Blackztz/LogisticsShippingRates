// Logistics Shipping Rates Calculator

function calculateShippingCost(weightKg, distanceKm) {
    const baseRate = 5.00;
    const ratePerKg = 1.50;
    const ratePerKm = 0.05;

    const totalCost = baseRate + (weightKg * ratePerKg) + (distanceKm * ratePerKm);
    return totalCost.toFixed(2);
}

console.log(`Cost: $${calculateShippingCost(10, 150)}`);
