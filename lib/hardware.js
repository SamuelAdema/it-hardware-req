export const hardwareList = [
  { 
    id: "thinkpad-x1", 
    name: 'ThinkPad X1 Carbon Gen 11', 
    category: "Computers", 
    price: 1450,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800&auto=format&fit=crop"
  },
  { 
    id: "dell-ultrasharp-27", 
    name: 'Dell UltraSharp 27" 4K', 
    category: "Peripherals", 
    price: 480,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800&auto=format&fit=crop"
  },
  { 
    id: "logitech-mx-master", 
    name: "Logitech MX Master 3S", 
    category: "Peripherals", 
    price: 99,
    // Updated with a working Unsplash mouse image
    image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?q=80&w=800&auto=format&fit=crop"
  },
  { 
    id: "caldigit-ts4", 
    name: "CalDigit TS4 Thunderbolt 4 Dock", 
    category: "Accessories", 
    price: 399,
    // Updated with a working Unsplash tech setup image
    image: "https://images.unsplash.com/photo-1544117565-d0d588da9c7e?q=80&w=800&auto=format&fit=crop"
  }
];

export async function getHardware() {
  return new Promise((resolve) => setTimeout(() => resolve(hardwareList), 800));
}

export async function getHardwareById(id) {
  const items = await getHardware();
  return items.find((item) => item.id === id);
}