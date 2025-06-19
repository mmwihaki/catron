import "./Categories.css";

export default function Categories() {
  const categories = [
    {
      id: 1,
      title: "Auto Parts",
      subtitle: "Mesh, Billet, CNC",
      icon: "🔧",
      itemCount: "2,547",
    },
    {
      id: 2,
      title: "Car Care",
      subtitle: "Polishes, Cleaners",
      icon: "🧽",
      itemCount: "1,234",
    },
    {
      id: 3,
      title: "Engine Parts",
      subtitle: "Filters, Belts, Hoses",
      icon: "⚙️",
      itemCount: "3,891",
    },
    {
      id: 4,
      title: "Brake System",
      subtitle: "Pads, Rotors, Fluids",
      icon: "🛞",
      itemCount: "1,567",
    },
    {
      id: 5,
      title: "Lighting",
      subtitle: "LED, Halogen, Xenon",
      icon: "💡",
      itemCount: "892",
    },
    {
      id: 6,
      title: "Suspension",
      subtitle: "Shocks, Struts, Springs",
      icon: "🔩",
      itemCount: "1,345",
    },
    {
      id: 7,
      title: "Exhaust",
      subtitle: "Mufflers, Pipes, Catalytic",
      icon: "🚗",
      itemCount: "678",
    },
    {
      id: 8,
      title: "Interior",
      subtitle: "Seats, Mats, Covers",
      icon: "🪑",
      itemCount: "2,134",
    },
    {
      id: 9,
      title: "Exterior",
      subtitle: "Bumpers, Grilles, Mirrors",
      icon: "🎨",
      itemCount: "1,789",
    },
    {
      id: 10,
      title: "Electronics",
      subtitle: "Audio, GPS, Sensors",
      icon: "📱",
      itemCount: "956",
    },
    {
      id: 11,
      title: "Tools",
      subtitle: "Wrenches, Jacks, Scanners",
      icon: "🔨",
      itemCount: "534",
    },
    {
      id: 12,
      title: "Tires",
      subtitle: "All Season, Winter, Summer",
      icon: "⭕",
      itemCount: "1,245",
    },
    {
      id: 13,
      title: "Oils & Fluids",
      subtitle: "Motor Oil, Coolant, Brake",
      icon: "🛢️",
      itemCount: "723",
    },
    {
      id: 14,
      title: "Battery",
      subtitle: "Lead Acid, AGM, Lithium",
      icon: "🔋",
      itemCount: "445",
    },
    {
      id: 15,
      title: "Performance",
      subtitle: "Turbo, Intake, Tuning",
      icon: "🏁",
      itemCount: "867",
    },
    {
      id: 16,
      title: "Body Parts",
      subtitle: "Doors, Hoods, Fenders",
      icon: "🚙",
      itemCount: "1,123",
    },
  ];

  return (
    <section className="categories-section">
      <div className="container">
        <h2 className="section-title">Shop by Categories</h2>
        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <div className="category-icon">
                <span>{category.icon}</span>
              </div>
              <div className="category-info">
                <h3 className="category-title">{category.title}</h3>
                <p className="category-subtitle">{category.subtitle}</p>
                <span className="category-count">
                  {category.itemCount} items
                </span>
              </div>
              <div className="category-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 18l6-6-6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
        <div className="load-more-container">
          <button className="btn btn-secondary load-more-btn">
            Load More Categories
          </button>
        </div>
      </div>
    </section>
  );
}
