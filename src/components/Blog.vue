<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation Header -->
    <nav class="bg-white shadow-sm border-b border-gray-200 px-4 py-4">
      <div class="max-w-6xl mx-auto">
        <div class="flex space-x-6">
          <router-link 
            to="/" 
            class="text-gray-600 hover:text-gray-800 transition-colors font-medium"
          >
            Katalog
          </router-link>
          <router-link 
            to="/blog" 
            class="text-gray-800 font-semibold border-b-2 border-soft-purple pb-1"
          >
            Blog
          </router-link>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="max-w-6xl mx-auto px-4 py-8">
      <!-- Page Title -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Blog Kami
        </h1>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto">
          Dapatkan tips, tutorial, dan inspirasi terbaru seputar desain dan AutoCAD
        </p>
      </div>

      <!-- Blog Posts Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article 
          v-for="post in blogPosts" 
          :key="post.id"
          class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <!-- Image Placeholder -->
          <div class="bg-dark-teal h-48 w-full"></div>
          
          <!-- Content -->
          <div class="p-6">
            <h2 class="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
              {{ post.title }}
            </h2>
            <p class="text-gray-600 mb-4 leading-relaxed">
              {{ post.excerpt }}
            </p>
            <div class="flex justify-end">
              <a 
                href="#" 
                class="text-soft-purple font-medium hover:text-purple-600 transition-colors inline-flex items-center"
              >
                Baca Selengkapnya
                <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </article>
      </div>

      <!-- Load More Button -->
      <div class="text-center mt-12">
        <button class="bg-soft-purple text-white px-8 py-3 rounded-full font-medium hover:bg-purple-600 transition-colors shadow-md">
          Muat Lebih Banyak
        </button>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  data() {
    return {
      blogPosts: [
        {
          id: 1,
          title: "Tips Membuat Desain Rumah Minimalis dengan AutoCAD",
          excerpt: "Pelajari teknik-teknik dasar untuk membuat desain rumah minimalis yang fungsional dan estetis menggunakan AutoCAD. Mulai dari konsep dasar hingga detail finishing."
        },
        {
          id: 2,
          title: "10 Template AutoCAD Gratis untuk Proyek Arsitektur",
          excerpt: "Kumpulan template AutoCAD terbaik yang bisa Anda download gratis untuk mempercepat proses desain arsitektur Anda. Cocok untuk pemula maupun profesional."
        },
        {
          id: 3,
          title: "Cara Mengoptimalkan Performa AutoCAD untuk File Besar",
          excerpt: "Tips dan trik untuk meningkatkan performa AutoCAD saat bekerja dengan file berukuran besar. Pelajari pengaturan yang tepat untuk workflow yang lebih efisien."
        },
        {
          id: 4,
          title: "Panduan Lengkap Layer Management di AutoCAD",
          excerpt: "Menguasai sistem layer adalah kunci efisiensi dalam AutoCAD. Pelajari best practices untuk mengorganisir layer dalam proyek desain Anda."
        },
        {
          id: 5,
          title: "Tren Desain Interior 2024 dan Implementasinya",
          excerpt: "Eksplorasi tren desain interior terkini tahun 2024 dan bagaimana mengimplementasikannya dalam proyek AutoCAD Anda untuk hasil yang modern dan up-to-date."
        },
        {
          id: 6,
          title: "Shortcut AutoCAD yang Wajib Diketahui Designer",
          excerpt: "Daftar lengkap shortcut AutoCAD yang akan mempercepat workflow Anda. Dari basic commands hingga advanced features yang sering diabaikan."
        }
      ]
    }
  }
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>