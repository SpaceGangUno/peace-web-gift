import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Book, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface BookItem {
  title: string;
  author: string;
  description: string;
  amazonLink: string;
  isTopRecommendation?: boolean;
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
          title: "How to Keep House While Drowning",
          author: "KC Davis",
          description: "A gentle approach to cleaning and organizing for those with ADHD or other executive function challenges.",
          amazonLink: "https://www.amazon.com/How-Keep-House-While-Drowning/dp/1668002841",
          isTopRecommendation: true
        },
        {
          title: "Scattered Minds",
          author: "Gabor Maté",
          description: "A new approach to understanding and treating Attention Deficit Disorder.",
          amazonLink: "https://www.amazon.com/Scattered-Minds-Origins-Attention-Disorder/dp/1785042211/",
          isTopRecommendation: true
        },
        {
          title: "Taking Charge of Adult ADHD",
          author: "Russell A. Barkley",
          description: "A step-by-step guide to managing ADHD symptoms and building essential life skills.",
          amazonLink: "https://www.amazon.com/Taking-Charge-Adult-ADHD-Second/dp/1462546854/"
        },
        {
          title: "Driven to Distraction",
          author: "Edward M. Hallowell & John J. Ratey",
          description: "Recognizing and coping with Attention Deficit Disorder from childhood through adulthood.",
          amazonLink: "https://www.amazon.com/Driven-Distraction-Revised-Recognizing-Attention/dp/0307743152/"
        },
        {
          title: "The ADHD Effect on Marriage",
          author: "Melissa Orlov",
          description: "Understanding and rebuilding your relationship when ADHD impacts your partnership.",
          amazonLink: "https://www.amazon.com/ADHD-Effect-Marriage-Understanding-Relationship/dp/1886941971/"
        }
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
          amazonLink: "https://www.amazon.com/Its-That-Youre-Not-Understand/dp/1622039076/",
          isTopRecommendation: true
        },
        {
          title: "The Year of Magical Thinking",
          author: "Joan Didion",
          description: "A powerful memoir of grief and mourning after the loss of a spouse.",
          amazonLink: "https://www.amazon.com/Year-Magical-Thinking-Joan-Didion/dp/1400078431/"
        },
        {
          title: "Bearing the Unbearable",
          author: "Joanne Cacciatore",
          description: "Love, loss, and the heartbreaking path of grief.",
          amazonLink: "https://www.amazon.com/Bearing-Unbearable-Love-Loss-Heartbreaking/dp/1614292965/"
        },
        {
          title: "Have Yourself a Merry Little Griefmas",
          author: "Shelley F. Knight",
          description: "A guide to navigating grief and loss during the holiday season.",
          amazonLink: "https://www.amazon.com/Have-Yourself-Merry-Little-Griefmas-ebook/dp/B0DMLR676R/"
        }
      ],
    },
    {
      id: "anxiety",
      name: "Anxiety",
      books: [
        {
          title: "Don't Believe Everything You Think",
          author: "Joseph Nguyen",
          description: "Change the way you feel by changing the way you think.",
          amazonLink: "https://www.amazon.com/Dont-Believe-Everything-You-Think/dp/1954854005/",
          isTopRecommendation: true
        },
        {
          title: "The Anxiety and Phobia Workbook",
          author: "Edmund J. Bourne",
          description: "Practical techniques and exercises to help manage anxiety and panic.",
          amazonLink: "https://www.amazon.com/Anxiety-Phobia-Workbook-Edmund-Bourne/dp/1684034833/"
        },
        {
          title: "Dare",
          author: "Barry McDonagh",
          description: "The new way to end anxiety and stop panic attacks.",
          amazonLink: "https://www.amazon.com/Dare-Anxiety-Stop-Panic-Attacks/dp/0956596258/"
        },
        {
          title: "Hope and Help for Your Nerves",
          author: "Claire Weekes",
          description: "End anxiety, panic, and fear with this classic guide.",
          amazonLink: "https://www.amazon.com/Hope-Help-Your-Nerves-Signet/dp/0451167228/"
        }
      ],
    },
    {
      id: "trauma",
      name: "Trauma",
      books: [
        {
          title: "The Body Keeps the Score",
          author: "Bessel van der Kolk",
          description: "Brain, mind, and body in the healing of trauma.",
          amazonLink: "https://www.amazon.com/Body-Keeps-Score-Healing-Trauma/dp/0143127748/",
          isTopRecommendation: true
        },
        {
          title: "Forgiving What You Can't Forget",
          author: "Lysa TerKeurst",
          description: "Discover how to move on, make peace with painful memories, and create a life that's beautiful again.",
          amazonLink: "https://www.amazon.com/Forgiving-What-Cant-Forget-Discover/dp/0718039874/",
          isTopRecommendation: true
        },
        {
          title: "Adult Children of Emotionally Immature Parents",
          author: "Lindsay C. Gibson",
          description: "How to heal from distant, rejecting, or self-involved parents.",
          amazonLink: "https://www.amazon.com/Adult-Children-Emotionally-Immature-Parents/dp/1626251703/"
        },
        {
          title: "It Didn't Start with You",
          author: "Mark Wolynn",
          description: "How inherited family trauma shapes who we are and how to end the cycle.",
          amazonLink: "https://www.amazon.com/Didnt-Start-You-Inherited-Family/dp/1101980389/"
        },
        {
          title: "What Happened to You?",
          author: "Bruce D. Perry & Oprah Winfrey",
          description: "Conversations on trauma, resilience, and healing.",
          amazonLink: "https://www.amazon.com/What-Happened-You-Conversations-Resilience/dp/1250223180/"
        },
        {
          title: "When the Body Says No",
          author: "Gabor Maté",
          description: "The cost of hidden stress and the mind-body connection in illness.",
          amazonLink: "https://www.amazon.com/When-Body-Says-Understanding-Stress-Disease/dp/0470923350/"
        },
        {
          title: "No Bad Parts",
          author: "Richard Schwartz",
          description: "Healing trauma and restoring wholeness with Internal Family Systems therapy.",
          amazonLink: "https://www.amazon.com/No-Bad-Parts-Restoring-Wholeness/dp/1683646681/"
        }
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
          amazonLink: "https://www.amazon.com/Worthy-Believe-Yourself-Unrelenting-Self-Criticism/dp/1400236746/",
          isTopRecommendation: true
        },
        {
          title: "The Mountain Is You",
          author: "Brianna Wiest",
          description: "Transforming self-sabotage into self-mastery.",
          amazonLink: "https://www.amazon.com/Mountain-You-Transforming-Self-Sabotage-Self-Mastery/dp/1949759229/"
        }
      ],
    },
    {
      id: "spiritual",
      name: "Spiritual",
      books: [
        {
          title: "The Untethered Soul",
          author: "Michael A. Singer",
          description: "The journey beyond yourself to spiritual awakening.",
          amazonLink: "https://www.amazon.com/Untethered-Soul-Journey-Beyond-Yourself/dp/1572245379/",
          isTopRecommendation: true
        },
        {
          title: "The Power of Now",
          author: "Eckhart Tolle",
          description: "A guide to spiritual enlightenment through present moment awareness.",
          amazonLink: "https://www.amazon.com/Power-Now-Guide-Spiritual-Enlightenment/dp/1577314808/",
          isTopRecommendation: true
        },
        {
          title: "The 5 AM Club",
          author: "Robin Sharma",
          description: "Own your morning, elevate your life with morning rituals for optimal performance.",
          amazonLink: "https://www.amazon.com/AM-Club-Morning-Elevate-Life/dp/1443456624/"
        },
        {
          title: "The Four Agreements",
          author: "Don Miguel Ruiz",
          description: "A practical guide to personal freedom based on ancient Toltec wisdom.",
          amazonLink: "https://www.amazon.com/Four-Agreements-Practical-Personal-Freedom/dp/1878424319/"
        }
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
            <div className="mb-8 flex justify-center overflow-x-auto py-2">
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

            {categories.map((category) => {
              const topRecommendations = category.books.filter(book => book.isTopRecommendation);
              const additionalBooks = category.books.filter(book => !book.isTopRecommendation);
              
              return (
                <TabsContent key={category.id} value={category.id} className="space-y-8">
                  {/* Top Recommendations Section */}
                  {topRecommendations.length > 0 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bookmania text-center mb-6">Top Recommendations</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {topRecommendations.map((book, index) => (
                          <Card
                            key={`top-${index}`}
                            className="overflow-hidden hover:shadow-lg transition-all hover:border-gold/50 flex flex-col relative animate-fade-in-up border-gold border-2"
                          >
                            <div className="absolute inset-0 bg-gold/5 animate-pulse pointer-events-none rounded-lg"></div>
                            <CardContent className="p-5 flex-grow relative z-10">
                              <div className="mb-3">
                                <h3 className="font-bookmania text-xl font-medium mb-1">{book.title}</h3>
                                <p className="text-sm text-muted-foreground">by {book.author}</p>
                              </div>
                              <p className="text-sm mb-4">{book.description}</p>
                              <a 
                                href={book.amazonLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gold hover:text-egyptian-earth text-sm font-medium inline-flex items-center mt-auto"
                              >
                                Find on Amazon
                                <ExternalLink className="h-3.5 w-3.5 ml-1" />
                              </a>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Additional Recommendations Section */}
                  {additionalBooks.length > 0 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bookmania text-center mb-6">Additional Recommendations</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {additionalBooks.map((book, index) => (
                          <Card
                            key={`additional-${index}`}
                            className="overflow-hidden hover:shadow-lg transition-all hover:border-gold/50 flex flex-col"
                          >
                            <CardContent className="p-5 flex-grow">
                              <div className="mb-3">
                                <h3 className="font-bookmania text-lg font-medium mb-1">{book.title}</h3>
                                <p className="text-sm text-muted-foreground">by {book.author}</p>
                              </div>
                              <p className="text-sm mb-4 line-clamp-3">{book.description}</p>
                              <a 
                                href={book.amazonLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gold hover:text-egyptian-earth text-sm font-medium inline-flex items-center mt-auto"
                              >
                                Find on Amazon
                                <ExternalLink className="h-3.5 w-3.5 ml-1" />
                              </a>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <p className="text-center text-sm text-muted-foreground mt-8">
                    This is just a small selection. Please reach out if you'd like more personalized recommendations.
                  </p>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default BookList;
