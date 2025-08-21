<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header Section -->
    <header class="bg-sunset-gradient w-full px-4 py-8 md:py-12">
      <div class="max-w-6xl mx-auto">
        <!-- Navigation -->
        <nav class="mb-8">
          <div class="flex space-x-6">
            <router-link 
              to="/" 
              class="text-white font-semibold border-b-2 border-white pb-1 hover:opacity-80 transition-opacity"
            >
              Katalog
            </router-link>
            <router-link 
              to="/blog" 
              class="text-white/80 hover:text-white transition-colors"
            >
              Blog
            </router-link>
          </div>
        </nav>

        <!-- Welcome Section -->
        <div class="text-center mb-8">
          <h1 class="text-3xl md:text-5xl font-bold text-white mb-4">
            Selamat datang
          </h1>
          <div class="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            <ul class="space-y-2">
              <li>• Temukan template AutoCAD berkualitas tinggi</li>
              <li>• Dapatkan inspirasi desain terbaru</li>
              <li>• Download gratis untuk keperluan proyek Anda</li>
            </ul>
          </div>
          
          <!-- Search Bar -->
          <div class="max-w-md mx-auto relative">
            <input 
              type="text" 
              placeholder="Cari template..." 
              class="w-full px-6 py-4 pr-12 rounded-full text-gray-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
            >
            <svg 
              class="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-6xl mx-auto px-4 py-8">
      <!-- Horizontal Scroll Section -->
      <section class="mb-12">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Mungkin anda suka</h2>
        <div class="overflow-x-auto hide-scrollbar">
          <div class="flex space-x-4 pb-4" style="width: max-content;">
            <div 
              v-for="n in 8" 
              :key="`horizontal-${n}`" 
              class="bg-white rounded-xl shadow-md p-4 w-48 flex-shrink-0 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div class="bg-dark-teal h-32 w-full rounded-lg mb-4"></div>
              <p class="text-center font-bold text-gray-800">Template Autocad</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Vertical List Section -->
      <section>
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Mungkin anda suka</h2>
        <div class="space-y-4">
          <div 
            v-for="n in 6" 
            :key="`vertical-${n}`" 
            class="bg-white rounded-xl shadow-md p-4 flex items-center hover:shadow-lg transition-shadow"
          >
            <!-- Image Placeholder -->
            <div class="bg-dark-teal h-16 w-16 rounded-lg flex-shrink-0"></div>
            
            <!-- Content -->
            <div class="flex-1 ml-4">
              <p class="font-bold text-gray-800">Template autocad</p>
            </div>
            
            <!-- Download Button -->
            <button class="bg-soft-purple text-white px-6 py-2 rounded-full font-medium hover:bg-purple-600 transition-colors">
              Unduh
            </button>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Catalog'
}
</script>