const ArticleCard = ({ title, author, image }) => (
  <div className="flex gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
    <img
      src={image || "/placeholder.svg?height=80&width=120"}
      alt="Article"
      className="w-20 sm:w-24 lg:w-28 h-16 sm:h-18 lg:h-20 rounded-lg object-cover flex-shrink-0"
    />
    <div className="flex-1">
      <h3 className="font-semibold text-gray-900 mb-1 text-sm lg:text-base leading-tight">{title}</h3>
      <p className="text-xs lg:text-sm text-gray-600">{author}</p>
    </div>
  </div>
)

const HealthArticles = () => {
  const articles = [
    {
      title: "12 Coronavirus Myths and Facts That You Should Be Aware Of",
      author: "Dr. Diana Borgio",
      image: "https://www.practostatic.com/fit/5fd27b74d9477cb633445cf3f105078bbc479910",
    },
    {
      title: "Eating Right to Build Immunity Against Cold and Viral Infections",
      author: "Dr. Diana Borgio",
      image: "https://www.practostatic.com/fit/bade52edc7fb158bf627216bf96c2b881a97f30c",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Read top articles from health experts</h2>
          <p className="text-gray-600 text-sm lg:text-base">
            Health articles that keep you informed about good health practices and achieve your goals.
          </p>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            See all articles
          </button>
        </div>

        <div className="space-y-2">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HealthArticles
