function AboutSection() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-4xl font-bold text-primary font-playfair">About Gourmet Delights</h2>
            <p className="mb-4 text-gray-700">
              At Gourmet Delights, we believe that every bite should be an experience to savor. Founded in 2010, our bakery has been dedicated to crafting premium baked goods that delight the senses and bring joy to our customers.
            </p>
            <p className="mb-4 text-gray-700">
              Our team of passionate artisan bakers combines time-honored techniques with innovative flavors to create products that are both familiar and exciting. We source only the finest ingredients, from locally-milled organic flours to premium Belgian chocolate and seasonal fruits from nearby farms.
            </p>
            <p className="text-gray-700">
              Whether you're celebrating a special occasion or simply treating yourself to a well-deserved indulgence, Gourmet Delights is committed to making your moments sweeter. Our dedication to quality, creativity, and customer satisfaction has made us a beloved fixture in the community, and we look forward to serving you for many years to come.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
              alt="Baker preparing dough" 
              className="object-cover w-full h-64 rounded-lg shadow-md"
            />
            <img 
              src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
              alt="Fresh baked bread" 
              className="object-cover w-full h-64 rounded-lg shadow-md"
            />
            <img 
              src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
              alt="Pastry chef decorating cake" 
              className="object-cover w-full h-64 rounded-lg shadow-md"
            />
            <img 
              src="https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
              alt="Assorted pastries" 
              className="object-cover w-full h-64 rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
