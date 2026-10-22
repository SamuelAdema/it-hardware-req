export const hardwareList = [
  { 
    id: "laptop-pro", 
    name: 'Laptop Pro 15"', 
    category: "Computers", 
    price: 1200,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800&auto=format&fit=crop"
  },
  { 
    id: "monitor-27", 
    name: '27" 4K Monitor', 
    category: "Peripherals", 
    price: 350,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800&auto=format&fit=crop"
  },
  { 
    id: "wireless-mouse", 
    name: "Ergonomic Wireless Mouse", 
    category: "Peripherals", 
    price: 45,
    image: "https://images.unsplash.com/photo-1527814050087-379381547949?q=80&w=800&auto=format&fit=crop"
  },
  { 
    id: "docking-station", 
    name: "USB-C Docking Station", 
    category: "Accessories", 
    price: 150,
    image: "https://images.unsplash.com/photo-1616422285623-1382435fbc5f?q=80&w=800&auto=format&fit=crop"
  },
];

export async function getHardware() {
  return new Promise((resolve) => setTimeout(() => resolve(hardwareList), 1000));
}

export async function getHardwareById(id) {
  const items = await getHardware();
  return items.find((item) => item.id === id);
}