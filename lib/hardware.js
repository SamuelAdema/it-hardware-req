export const hardwareList = [
  { 
    id: "laptop-pro", 
    name: 'ThinkPad X1 Carbon Gen 11', 
    category: "Computers", 
    price: 1450,
    image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%231e3a8a'/%3E%3Ctext x='400' y='300' font-family='sans-serif' font-size='40' fill='white' text-anchor='middle' dominant-baseline='middle'%3ELaptop Pro%3C/text%3E%3C/svg%3E"
  },
  { 
    id: "monitor-27", 
    name: 'Dell UltraSharp 27" 4K', 
    category: "Peripherals", 
    price: 480,
    image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%231e3a8a'/%3E%3Ctext x='400' y='300' font-family='sans-serif' font-size='40' fill='white' text-anchor='middle' dominant-baseline='middle'%3E27-Inch Monitor%3C/text%3E%3C/svg%3E"
  },
  { 
    id: "wireless-mouse", 
    name: "Logitech MX Master 3S", 
    category: "Peripherals", 
    price: 99,
    image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%231e3a8a'/%3E%3Ctext x='400' y='300' font-family='sans-serif' font-size='40' fill='white' text-anchor='middle' dominant-baseline='middle'%3EWireless Mouse%3C/text%3E%3C/svg%3E"
  },
  { 
    id: "docking-station", 
    name: "CalDigit TS4 Thunderbolt 4 Dock", 
    category: "Accessories", 
    price: 399,
    image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%231e3a8a'/%3E%3Ctext x='400' y='300' font-family='sans-serif' font-size='40' fill='white' text-anchor='middle' dominant-baseline='middle'%3EDocking Station%3C/text%3E%3C/svg%3E"
  },
];

export async function getHardware() {
  return new Promise((resolve) => setTimeout(() => resolve(hardwareList), 800));
}

export async function getHardwareById(id) {
  const items = await getHardware();
  return items.find((item) => item.id === id);
}