
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Book } from "lucide-react";

interface BookItem {
  title: string;
  author: string;
  description: string;
  amazonLink?: string;
  imageUrl?: string;
}

interface BookCategory {
  id: string;
  name: string;
  books: BookItem[];
}

const BookList = () => {
  const [categories] = useState<BookCategory[]>([
    {
      id: "adhd",
      name: "ADHD",
      books: [
        {
          title: "Taking Charge of Adult ADHD",
          author: "Russell A. Barkley",
          description: "A step-by-step guide to managing ADHD symptoms and building essential life skills.",
          amazonLink: "#",
        },
        {
          title: "Driven to Distraction",
          author: "Edward M. Hallowell & John J. Ratey",
          description: "Recognizing and coping with Attention Deficit Disorder from childhood through adulthood.",
          amazonLink: "#",
        },
        {
          title: "The ADHD Effect on Marriage",
          author: "Melissa Orlov",
          description: "Understanding and rebuilding your relationship when ADHD impacts your partnership.",
          amazonLink: "#",
        },
        {
          title: "How to Keep House While Drowning",
          author: "KC Davis",
          description: "A gentle approach to cleaning and organizing for those with ADHD or other executive function challenges.",
          amazonLink: "#",
        },
        {
          title: "Scattered Minds",
          author: "Gabor Maté",
          description: "A new approach to understanding and treating Attention Deficit Disorder.",
          amazonLink: "#",
        },
      ],
    },
    {
      id: "grief",
      name: "Grief",
      books: [
        {
          title: "It's OK That You're Not OK",
          author: "Megan Devine",
          description: "Meeting grief and loss in a culture that doesn't understand.",
          amazonLink: "#",
        },
        {
          title: "The Year of Magical Thinking",
          author: "Joan Didion",
          description: "A powerful memoir of grief and mourning after the loss of a spouse.",
          amazonLink: "#",
        },
        {
          title: "Bearing the Unbearable",
          author: "Joanne Cacciatore",
          description: "Love, loss, and the heartbreaking path of grief.",
          amazonLink: "#",
        },
        {
          title: "Have Yourself a Merry Little Griefmas",
          author: "Shelley F. Knight",
          description: "A guide to navigating grief and loss during the holiday season.",
          amazonLink: "#",
        },
      ],
    },
    {
      id: "anxiety",
      name: "Anxiety",
      books: [
        {
          title: "The Anxiety and Phobia Workbook",
          author: "Edmund J. Bourne",
          description: "Practical techniques and exercises to help manage anxiety and panic.",
          amazonLink: "#",
        },
        {
          title: "Dare",
          author: "Barry McDonagh",
          description: "The new way to end anxiety and stop panic attacks.",
          amazonLink: "#",
        },
        {
          title: "Hope and Help for Your Nerves",
          author: "Claire Weekes",
          description: "End anxiety, panic, and fear with this classic guide.",
          amazonLink: "#",
        },
        {
          title: "Don't Believe Everything You Think",
          author: "Joseph Nguyen",
          description: "Change the way you feel by changing the way you think.",
          amazonLink: "#",
        },
      ],
    },
    {
      id: "trauma",
      name: "Trauma",
      books: [
        {
          title: "Adult Children of Emotionally Immature Parents",
          author: "Lindsay C. Gibson",
          description: "How to heal from distant, rejecting, or self-involved parents.",
          amazonLink: "#",
        },
        {
          title: "The Body Keeps the Score",
          author: "Bessel van der Kolk",
          description: "Brain, mind, and body in the healing of trauma.",
          amazonLink: "#",
        },
        {
          title: "Forgiving What You Can't Forget",
          author: "Lysa TerKeurst",
          description: "Discover how to move on, make peace with painful memories, and create a life that's beautiful again.",
          amazonLink: "#",
        },
        {
          title: "It Didn't Start with You",
          author: "Mark Wolynn",
          description: "How inherited family trauma shapes who we are and how to end the cycle.",
          amazonLink: "#",
        },
        {
          title: "What Happened to You?",
          author: "Bruce D. Perry & Oprah Winfrey",
          description: "Conversations on trauma, resilience, and healing.",
          amazonLink: "#",
        },
        {
          title: "When the Body Says No",
          author: "Gabor Maté",
          description: "The cost of hidden stress and the mind-body connection in illness.",
          amazonLink: "#",
        },
      ],
    },
    {
      id: "self-help",
      name: "Self-Help",
      books: [
        {
          title: "Atomic Habits",
          author: "James Clear",
          description: "An easy and proven way to build good habits and break bad ones.",
          amazonLink: "#",
        },
        {
          title: "The Gifts of Imperfection",
          author: "Brené Brown",
          description: "Let go of who you think you're supposed to be and embrace who you are.",
          amazonLink: "#",
        },
        {
          title: "The Body Keeps the Score",
          author: "Bessel van der Kolk",
          description: "Brain, mind, and body in the healing of trauma.",
          amazonLink: "#",
        },
      ],
    },
    {
      id: "self-esteem",
      name: "Self Esteem",
      books: [
        {
          title: "Worthy",
          author: "Jamie Kern Lima",
          description: "How to believe in yourself in a world of unrelenting self-criticism.",
          amazonLink: "#",
        },
        {
          title: "The Mountain Is You",
          author: "Brianna Wiest",
          description: "Transforming self-sabotage into self-mastery.",
          amazonLink: "#",
        },
      ],
    },
    {
      id: "spiritual",
      name: "Spiritual",
      books: [
        {
          title: "The Power of Now",
          author: "Eckhart Tolle",
          description: "A guide to spiritual enlightenment through present moment awareness.",
          amazonLink: "#",
        },
        {
          title: "When Things Fall Apart",
          author: "Pema Chödrön",
          description: "Heart advice for difficult times with Buddhist wisdom.",
          amazonLink: "#",
        },
        {
          title: "The Book of Joy",
          author: "Dalai Lama & Desmond Tutu",
          description: "Lasting happiness in a changing world through spiritual practices.",
          amazonLink: "#",
        },
        {
          title: "The Untethered Soul",
          author: "Michael A. Singer",
          description: "The journey beyond yourself to spiritual awakening.",
          amazonLink: "#",
        },
        {
          title: "The 5 AM Club",
          author: "Robin Sharma",
          description: "Own your morning, elevate your life with morning rituals for optimal performance.",
          amazonLink: "#",
        },
        {
          title: "No Bad Parts",
          author: "Richard Schwartz",
          description: "Healing trauma and restoring wholeness with Internal Family Systems therapy.",
          amazonLink: "#",
        },
        {
          title: "The Four Agreements",
          author: "Don Miguel Ruiz",
          description: "A practical guide to personal freedom based on ancient Toltec wisdom.",
          amazonLink: "#",
        },
      ],
    },
  ]);

  return (
    <section className="section bg-background">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bookmania mb-4">
              Recommended <span className="gold-text">Reading</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Books have the power to heal, inspire, and transform. Here are some recommended readings 
              categorized by topic that might help you on your journey to mental wellness.
            </p>
          </div>

          <Tabs defaultValue="adhd" className="w-full">
            <div className="mb-8 flex justify-center">
              <TabsList className="bg-muted/50">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="px-4 py-2 text-sm md:text-base font-bookmania"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.books.map((book, index) => (
                    <div 
                      key={index}
                      className="bg-white rounded-lg shadow-md overflow-hidden border border-border hover:border-gold/50 transition-all"
                    >
                      <div className="p-6">
                        <div className="flex items-start mb-4">
                          <Book className="text-gold mr-3 flex-shrink-0" />
                          <div>
                            <h3 className="font-bookmania text-lg font-medium mb-1">{book.title}</h3>
                            <p className="text-sm text-muted-foreground mb-2">by {book.author}</p>
                          </div>
                        </div>
                        <p className="text-sm mb-4">{book.description}</p>
                        {book.amazonLink && (
                          <a 
                            href={book.amazonLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gold hover:text-egyptian-earth text-sm font-medium inline-flex items-center"
                          >
                            Find on Amazon
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-center text-sm text-muted-foreground mt-8">
                  This is just a small selection. Please reach out if you'd like more personalized recommendations.
                </p>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default BookList;
