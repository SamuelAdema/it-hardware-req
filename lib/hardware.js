export const hardwareList = [
  { id: "laptop-pro", name: 'Laptop Pro 15"', category: "Computers", price: 1200 },
  { id: "monitor-27", name: '27" 4K Monitor', category: "Peripherals", price: 350 },
  { id: "wireless-mouse", name: "Ergonomic Wireless Mouse", category: "Peripherals", price: 45 },
  { id: "docking-station", name: "USB-C Docking Station", category: "Accessories", price: 150 },
];

// Simulates a network delay for server-side fetching
export async function getHardware() {
  return new Promise((resolve) => setTimeout(() => resolve(hardwareList), 1000));
}

// Finds a specific item by ID
export async function getHardwareById(id) {
  const items = await getHardware();
  return items.find((item) => item.id === id);
}