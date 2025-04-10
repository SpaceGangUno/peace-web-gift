
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Book, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface BookItem {
  title: string;
  author: string;
  description: string;
  amazonLink: string;
  imageUrl: string;
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
          amazonLink: "https://www.amazon.com/Taking-Charge-Adult-ADHD-Second/dp/1462546854/",
          imageUrl: "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=400&h=600&auto=format&fit=crop"
        },
        {
          title: "Driven to Distraction",
          author: "Edward M. Hallowell & John J. Ratey",
          description: "Recognizing and coping with Attention Deficit Disorder from childhood through adulthood.",
          amazonLink: "https://www.amazon.com/Driven-Distraction-Revised-Recognizing-Attention/dp/0307743152/",
          imageUrl: "https://images.unsplash.com/photo-1497561813398-8fcc7a37b567?q=80&w=400&h=600&auto=format&fit=crop"
        },
        {
          title: "The ADHD Effect on Marriage",
          author: "Melissa Orlov",
          description: "Understanding and rebuilding your relationship when ADHD impacts your partnership.",
          amazonLink: "https://www.amazon.com/ADHD-Effect-Marriage-Relationship-Improve/dp/1886941971/",
          imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&h=600&auto=format&fit=crop"
        },
        {
          title: "How to Keep House While Drowning",
          author: "KC Davis",
          description: "A gentle approach to cleaning and organizing for those with ADHD or other executive function challenges.",
          amazonLink: "https://www.amazon.com/Keep-House-While-Drowning-compassionate/dp/1398710377/",
          imageUrl: "https://images.unsplash.com/photo-1584473457409-ae5c91d7d8b1?q=80&w=400&h=600&auto=format&fit=crop"
        },
        {
          title: "Scattered Minds",
          author: "Gabor Maté",
          description: "A new approach to understanding and treating Attention Deficit Disorder.",
          amazonLink: "https://www.amazon.com/Scattered-Minds-Origins-Attention-Disorder/dp/1785042211/",
          imageUrl: "https://images.unsplash.com/photo-1541781774-b1cf4a81eb81?q=80&w=400&h=600&auto=format&fit=crop"
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
          amazonLink: "https://www.amazon.com/Its-That-Youre-Not-Understand/dp/1622039076/",
          imageUrl: "https://images.unsplash.com/photo-1474031317822-f51f48735ddd?q=80&w=400&h=600&auto=format&fit=crop"
        },
        {
          title: "The Year of Magical Thinking",
          author: "Joan Didion",
          description: "A powerful memoir of grief and mourning after the loss of a spouse.",
          amazonLink: "https://www.amazon.com/Year-Magical-Thinking-Joan-Didion/dp/1400078431/",
          imageUrl: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?q=80&w=400&h=600&auto=format&fit=crop"
        },
        {
          title: "Bearing the Unbearable",
          author: "Joanne Cacciatore",
          description: "Love, loss, and the heartbreaking path of grief.",
          amazonLink: "https://www.amazon.com/Bearing-Unbearable-Love-Loss-Heartbreaking/dp/1614292965/",
          imageUrl: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=400&h=600&auto=format&fit=crop"
        },
        {
          title: "Have Yourself a Merry Little Griefmas",
          author: "Shelley F. Knight",
          description: "A guide to navigating grief and loss during the holiday season.",
          amazonLink: "https://www.amazon.com/Have-Yourself-Merry-Little-Griefmas/dp/1739206207/",
          imageUrl: "https://images.unsplash.com/photo-1607370921719-9272a366d01d?q=80&w=400&h=600&auto=format&fit=crop"
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
          amazonLink: "https://www.amazon.com/Anxiety-Phobia-Workbook-Edmund-Bourne/dp/1684034833/",
          imageUrl: "https://images.unsplash.com/photo-1541199249251-f713e6145474?q=80&w=400&h=600&auto=format&fit=crop"
        },
        {
          title: "Dare",
          author: "Barry McDonagh",
          description: "The new way to end anxiety and stop panic attacks.",
          amazonLink: "https://www.amazon.com/Dare-Anxiety-Stop-Panic-Attacks/dp/0956596258/",
          imageUrl: "https://images.unsplash.com/photo-1494972308805-463bc619d34e?q=80&w=400&h=600&auto=format&fit=crop"
        },
        {
          title: "Hope and Help for Your Nerves",
          author: "Claire Weekes",
          description: "End anxiety, panic, and fear with this classic guide.",
          amazonLink: "https://www.amazon.com/Hope-Help-Nerves-Claire-Weekes/dp/0451167228/",
          imageUrl: "https://images.unsplash.com/photo-1610809027249-86c649feabc5?q=80&w=400&h=600&auto=format&fit=crop"
        },
        {
          title: "Don't Believe Everything You Think",
          author: "Joseph Nguyen",
          description: "Change the way you feel by changing the way you think.",
          amazonLink: "https://www.amazon.com/Dont-Believe-Everything-You-Think/dp/1954854005/",
          imageUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=400&h=600&auto=format&fit=crop"
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
          amazonLink: "https://www.amazon.com/Adult-Children-Emotionally-Immature-Parents/dp/1626251703/",
          imageUrl: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=400&h=600&auto=format&fit=crop"
        },
        {
          title: "The Body Keeps the Score",
          author: "Bessel van der Kolk",
          description: "Brain, mind, and body in the healing of trauma.",
          amazonLink: "https://www.amazon.com/Body-Keeps-Score-Healing-Trauma/dp/0143127748/",
          imageUrl: "https://images.unsplash.com/photo-1547860664-b8537ca5f833?q=80&w=400&h=600&auto=format&fit=crop"
        },
        {
          title: "Forgiving What You Can't Forget",
          author: "Lysa TerKeurst",
          description: "Discover how to move on, make peace with painful memories, and create a life that's beautiful again.",
          amazonLink: "https://www.amazon.com/Forgiving-What-Cant-Forget-Discover/dp/0718039874/",
          imageUrl: "https://images.unsplash.com/photo-1594312915251-48db9280c8f1?q=80&w=400&h=600&auto=format&fit=crop"
        },
        {
          title: "It Didn't Start with You",
          author: "Mark Wolynn",
          description: "How inherited family trauma shapes who we are and how to end the cycle.",
          amazonLink: "https://www.amazon.com/Didnt-Start-You-Inherited-Family/dp/1101980389/",
          imageUrl: "https://images.unsplash.com/photo-1490633874781-1c63cc424610?q=80&w=400&h=600&auto=format&fit=crop"
        },
        {
          title: "What Happened to You?",
          author: "Bruce D. Perry & Oprah Winfrey",
          description: "Conversations on trauma, resilience, and healing.",
          amazonLink: "https://www.amazon.com/What-Happened-You-Understanding-Resilience/dp/1250223180/",
          imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=400&h=600&auto=format&fit=crop"
        },
        {
          title: "When the Body Says No",
          author: "Gabor Maté",
          description: "The cost of hidden stress and the mind-body connection in illness.",
          amazonLink: "https://www.amazon.com/When-Body-Says-Understanding-Stress-Disease/dp/0470923350/",
          imageUrl: "https://images.unsplash.com/photo-1621600411688-a0070d79f200?q=80&w=400&h=600&auto=format&fit=crop"
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
          amazonLink: "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299/",
          imageUrl: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?q=80&w=400&h=600&auto=format&fit=crop"
        },
        {
          title: "The Gifts of Imperfection",
          author: "Brené Brown",
          description: "Let go of who you think you're supposed to be and embrace who you are.",
          amazonLink: "https://www.amazon.com/Gifts-Imperfection-Think-Supposed-Embrace/dp/0593133587/",
          imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&h=600&auto=format&fit=crop"
        },
        {
          title: "The Body Keeps the Score",
          author: "Bessel van der Kolk",
          description: "Brain, mind, and body in the healing of trauma.",
          amazonLink: "https://www.amazon.com/Body-Keeps-Score-Healing-Trauma/dp/0143127748/",
          imageUrl: "https://images.unsplash.com/photo-1547860664-b8537ca5f833?q=80&w=400&h=600&auto=format&fit=crop"
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
          amazonLink: "https://www.amazon.com/Worthy-Believe-Yourself-Unrelenting-Self-Criticism/dp/1400236746/",
          imageUrl: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=400&h=600&auto=format&fit=crop"
        },
        {
          title: "The Mountain Is You",
          author: "Brianna Wiest",
          description: "Transforming self-sabotage into self-mastery.",
          amazonLink: "https://www.amazon.com/Mountain-You-Transforming-Self-Sabotage-Self-Mastery/dp/1949759229/",
          imageUrl: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=400&h=600&auto=format&fit=crop"
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
          amazonLink: "https://www.amazon.com/Power-Now-Guide-Spiritual-Enlightenment/dp/1577314808/",
          imageUrl: "https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?q=80&w=400&h=600&auto=format&fit=crop"
        },
        {
          title: "When Things Fall Apart",
          author: "Pema Chödrön",
          description: "Heart advice for difficult times with Buddhist wisdom.",
          amazonLink: "https://www.amazon.com/When-Things-Fall-Apart-Difficult/dp/1611803438/",
          imageUrl: "https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?q=80&w=400&h=600&auto=format&fit=crop"
        },
        {
          title: "The Book of Joy",
          author: "Dalai Lama & Desmond Tutu",
          description: "Lasting happiness in a changing world through spiritual practices.",
          amazonLink: "https://www.amazon.com/Book-Joy-Lasting-Happiness-Changing/dp/0399185046/",
          imageUrl: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=400&h=600&auto=format&fit=crop"
        },
        {
          title: "The Untethered Soul",
          author: "Michael A. Singer",
          description: "The journey beyond yourself to spiritual awakening.",
          amazonLink: "https://www.amazon.com/Untethered-Soul-Journey-Beyond-Yourself/dp/1572245379/",
          imageUrl: "https://images.unsplash.com/photo-1505816014357-96b5ff457e9a?q=80&w=400&h=600&auto=format&fit=crop"
        },
        {
          title: "The 5 AM Club",
          author: "Robin Sharma",
          description: "Own your morning, elevate your life with morning rituals for optimal performance.",
          amazonLink: "https://www.amazon.com/AM-Club-Morning-Elevate-Life/dp/1443456624/",
          imageUrl: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?q=80&w=400&h=600&auto=format&fit=crop"
        },
        {
          title: "No Bad Parts",
          author: "Richard Schwartz",
          description: "Healing trauma and restoring wholeness with Internal Family Systems therapy.",
          amazonLink: "https://www.amazon.com/No-Bad-Parts-Restoring-Wholeness/dp/1683646681/",
          imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400&h=600&auto=format&fit=crop"
        },
        {
          title: "The Four Agreements",
          author: "Don Miguel Ruiz",
          description: "A practical guide to personal freedom based on ancient Toltec wisdom.",
          amazonLink: "https://www.amazon.com/Four-Agreements-Practical-Personal-Freedom/dp/1878424319/",
          imageUrl: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=400&h=600&auto=format&fit=crop"
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

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.books.map((book, index) => (
                    <Card
                      key={index}
                      className="overflow-hidden hover:shadow-lg transition-all hover:border-gold/50"
                    >
                      <div className="aspect-[2/3] relative overflow-hidden">
                        <img 
                          src={book.imageUrl} 
                          alt={`Cover of ${book.title}`}
                          className="object-cover w-full h-full transition-transform hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-5">
                        <div className="mb-3">
                          <h3 className="font-bookmania text-lg font-medium mb-1">{book.title}</h3>
                          <p className="text-sm text-muted-foreground">by {book.author}</p>
                        </div>
                        <p className="text-sm mb-4 line-clamp-3">{book.description}</p>
                        <a 
                          href={book.amazonLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gold hover:text-egyptian-earth text-sm font-medium inline-flex items-center"
                        >
                          Find on Amazon
                          <ExternalLink className="h-3.5 w-3.5 ml-1" />
                        </a>
                      </CardContent>
                    </Card>
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
