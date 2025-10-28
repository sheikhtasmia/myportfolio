import React from 'react'

export default function Carousel() {
  const images = [
    'https://images.unsplash.com/photo-1508385082359-f26a5e9dbcc4?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=8b8e86d0b02424d9f9da9eae2869d139',
    'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=67e867b9d0b3f6d0c0e0d5f7f2580a79',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=1a1560f4cf13bacec95d3b1c2aa8ba76'
  ]

  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const t = setInterval(() => {
      setIndex(i => (i + 1) % images.length)
    }, 4500)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="absolute inset-0 flex">
      {images.map((src, i) => (
        <div key={i} className={`w-full transition-opacity duration-1000 ${i === index ? 'opacity-100' : 'opacity-0'}`}>
          <div className="h-[70vh] md:h-[80vh] bg-center bg-cover" style={{ backgroundImage: `url(${src})` }} />
        </div>
      ))}
    </div>
  )
}
