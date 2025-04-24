function Logo({ className }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="45" fill="#F5F0E5" />
      <path 
        d="M30,35 C30,25 40,20 50,20 C60,20 70,25 70,35 C70,45 60,50 50,50 C40,50 30,45 30,35 Z" 
        fill="#8B5A2B" 
      />
      <path 
        d="M25,65 C25,55 35,45 50,45 C65,45 75,55 75,65 C75,75 65,80 50,80 C35,80 25,75 25,65 Z" 
        fill="#8B5A2B" 
      />
      <circle cx="50" cy="35" r="5" fill="#D4AF37" />
      <circle cx="50" cy="65" r="7" fill="#D4AF37" />
      <text 
        x="50" 
        y="95" 
        fontSize="10" 
        textAnchor="middle" 
        fill="#8B5A2B"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
      >
        GOURMET
      </text>
    </svg>
  )
}

export default Logo
