export const hardwareList = [
  { 
    id: "laptop-pro", 
    name: 'ThinkPad X1 Carbon Gen 11', 
    category: "Computers", 
    price: 1450,
    image: "https://placehold.co/800x600/1e3a8a/ffffff?text=Laptop+Pro"
  },
  { 
    id: "monitor-27", 
    name: 'Dell UltraSharp 27" 4K', 
    category: "Peripherals", 
    price: 480,
    image: "https://placehold.co/800x600/1e3a8a/ffffff?text=27+Inch+Monitor"
  },
  { 
    id: "wireless-mouse", 
    name: "Logitech MX Master 3S", 
    category: "Peripherals", 
    price: 99,
    image: "https://placehold.co/800x600/1e3a8a/ffffff?text=Wireless+Mouse"
  },
  { 
    id: "docking-station", 
    name: "CalDigit TS4 Thunderbolt 4 Dock", 
    category: "Accessories", 
    price: 399,
    image: "https://placehold.co/800x600/1e3a8a/ffffff?text=Docking+Station"
  },
];

export async function getHardware() {
  return new Promise((resolve) => setTimeout(() => resolve(hardwareList), 800));
}

export async function getHardwareById(id) {
  const items = await getHardware();
  return items.find((item) => item.id === id);
}