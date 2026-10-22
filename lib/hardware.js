export const hardwareList = [
  { 
    id: "laptop-pro", 
    name: 'ThinkPad X1 Carbon Gen 11', 
    category: "Computers", 
    price: 1450,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800&auto=format&fit=crop"
  },
  { 
    id: "monitor-27", 
    name: 'Dell UltraSharp 27" 4K', 
    category: "Peripherals", 
    price: 480,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800&auto=format&fit=crop"
  },
  { 
    id: "wireless-mouse", 
    name: "Logitech MX Master 3S", 
    category: "Peripherals", 
    price: 99,
    image: "https://images.unsplash.com/photo-1527814050087-379381547949?q=80&w=800&auto=format&fit=crop"
  },
  { 
    id: "docking-station", 
    name: "CalDigit TS4 Thunderbolt 4 Dock", 
    category: "Accessories", 
    price: 399,
    image: "https://images.unsplash.com/photo-1616422285623-1382435fbc5f?q=80&w=800&auto=format&fit=crop"
  },
];

export async function getHardware() {
  return new Promise((resolve) => setTimeout(() => resolve(hardwareList), 800));
}

export async function getHardwareById(id) {
  const items = await getHardware();
  return items.find((item) => item.id === id);
}