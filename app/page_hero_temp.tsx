{
  /* Hero Section */
}
<section className="relative bg-gradient-to-r from-surface-dark to-surface-dark text-white overflow-hidden">
  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=1920&h=1080&fit=crop&auto=format&q=95')",
    }}
  ></div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 md:py-20">
    {/* Mobile Layout - Centered */}
    <div className="block lg:hidden">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
          Premium <span className="text-accent-primary">Nissan</span> Parts
        </h1>
        <p className="text-lg md:text-xl mb-6 md:mb-8 text-white max-w-3xl mx-auto">
          Kenya's #1 marketplace for genuine OEM and performance parts. Quality
          guaranteed, expert fitment support, fast delivery nationwide.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 md:mb-12">
          <Link href="/shop" className="btn-primary text-lg px-8 py-4">
            Shop Nissan Parts
          </Link>
          <Link
            href="/support"
            className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary"
          >
            Fitment Guide
          </Link>
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="card-white">
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-center text-primary">
            Find Parts for Your Nissan
          </h3>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-primary mb-1">
                  Year
                </label>
                <select
                  className="form-input w-full"
                  value={vehicleYear}
                  onChange={(e) => setVehicleYear(e.target.value)}
                >
                  <option value="">Select Year</option>
                  {Array.from({ length: 15 }, (_, i) => 2024 - i).map(
                    (year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ),
                  )}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-1">
                  Model
                </label>
                <select
                  className="form-input w-full"
                  value={vehicleModel}
                  onChange={(e) => setVehicleModel(e.target.value)}
                >
                  <option value="">Select Model</option>
                  <option value="Note">Note</option>
                  <option value="March">March</option>
                  <option value="X-Trail">X-Trail</option>
                  <option value="Qashqai">Qashqai</option>
                  <option value="Serena">Serena</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-primary mb-1">
                Engine
              </label>
              <select
                className="form-input w-full"
                value={vehicleEngine}
                onChange={(e) => setVehicleEngine(e.target.value)}
              >
                <option value="">Select Engine</option>
                <option value="1.0L">1.0L</option>
                <option value="1.2L DIG-S">1.2L DIG-S</option>
                <option value="1.5L">1.5L</option>
                <option value="2.0L">2.0L</option>
                <option value="2.5L">2.5L</option>
              </select>
            </div>

            <button type="button" className="btn-primary w-full py-3">
              Find Compatible Parts
            </button>
          </form>
        </div>
      </div>
    </div>

    {/* Desktop Layout - Left/Right Split */}
    <div className="hidden lg:block">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-left">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Premium <span className="text-accent-primary">Nissan</span> Parts
          </h1>
          <p className="text-xl mb-8 text-white">
            Kenya's #1 marketplace for genuine OEM and performance parts.
            Quality guaranteed, expert fitment support, fast delivery
            nationwide.
          </p>
          <div className="flex gap-4">
            <Link href="/shop" className="btn-primary text-lg px-8 py-4">
              Shop Nissan Parts
            </Link>
            <Link
              href="/support"
              className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary"
            >
              Fitment Guide
            </Link>
          </div>
        </div>

        {/* Right Form */}
        <div>
          <div className="card-white">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-center text-primary">
              Find Parts for Your Nissan
            </h3>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-primary mb-1">
                    Year
                  </label>
                  <select
                    className="form-input w-full"
                    value={vehicleYear}
                    onChange={(e) => setVehicleYear(e.target.value)}
                  >
                    <option value="">Select Year</option>
                    {Array.from({ length: 15 }, (_, i) => 2024 - i).map(
                      (year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ),
                    )}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-1">
                    Model
                  </label>
                  <select
                    className="form-input w-full"
                    value={vehicleModel}
                    onChange={(e) => setVehicleModel(e.target.value)}
                  >
                    <option value="">Select Model</option>
                    <option value="Note">Note</option>
                    <option value="March">March</option>
                    <option value="X-Trail">X-Trail</option>
                    <option value="Qashqai">Qashqai</option>
                    <option value="Serena">Serena</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-1">
                  Engine
                </label>
                <select
                  className="form-input w-full"
                  value={vehicleEngine}
                  onChange={(e) => setVehicleEngine(e.target.value)}
                >
                  <option value="">Select Engine</option>
                  <option value="1.0L">1.0L</option>
                  <option value="1.2L DIG-S">1.2L DIG-S</option>
                  <option value="1.5L">1.5L</option>
                  <option value="2.0L">2.0L</option>
                  <option value="2.5L">2.5L</option>
                </select>
              </div>

              <button type="button" className="btn-primary w-full py-3">
                Find Compatible Parts
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>;
