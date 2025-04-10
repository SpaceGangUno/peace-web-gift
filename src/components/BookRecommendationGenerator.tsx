import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Book, Search, BookOpen, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BookItem {
  title: string;
  author: string;
  description: string;
  amazonLink: string;
  isTopRecommendation?: boolean;
}

interface BookRecommendationGeneratorProps {
  allBooks: BookItem[];
}

const BookRecommendationGenerator = ({ allBooks }: BookRecommendationGeneratorProps) => {
  const [query, setQuery] = useState("");
  const [recommendations, setRecommendations] = useState<BookItem[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  // Additional books that aren't in the main categories
  const additionalBooks: BookItem[] = [
    // Mental Health & Self-Help
    {
      title: "Tiny Beautiful Things",
      author: "Cheryl Strayed",
      description: "A collection of advice columns that offers empathetic guidance on love, loss, and finding meaning in life's struggles.",
      amazonLink: "https://www.amazon.com/Tiny-Beautiful-Things-Advice-Sugar/dp/0307949338/"
    },
    {
      title: "Maybe You Should Talk to Someone",
      author: "Lori Gottlieb",
      description: "A therapist explores the human condition through her work with clients and her own therapy journey.",
      amazonLink: "https://www.amazon.com/Maybe-You-Should-Talk-Someone/dp/1328662055/"
    },
    {
      title: "Self-Compassion: The Proven Power of Being Kind to Yourself",
      author: "Kristin Neff",
      description: "Offers practical exercises and action plans for dealing with every emotionally difficult situation.",
      amazonLink: "https://www.amazon.com/Self-Compassion-Proven-Power-Being-Yourself/dp/0061733520/"
    },
    {
      title: "The Gifts of Imperfection",
      author: "Brené Brown",
      description: "A guide to wholehearted living that encourages letting go of perfectionism and embracing vulnerability.",
      amazonLink: "https://www.amazon.com/Gifts-Imperfection-Think-Supposed-Embrace/dp/159285849X/"
    },
    {
      title: "Permission to Feel",
      author: "Marc Brackett",
      description: "Unlocking the power of emotions to help us achieve success and well-being.",
      amazonLink: "https://www.amazon.com/Permission-Feel-Unlocking-Emotions-Success/dp/1250212839/"
    },
    // Depression & Mood Disorders
    {
      title: "Lost Connections",
      author: "Johann Hari",
      description: "Uncovering the real causes of depression and the unexpected solutions.",
      amazonLink: "https://www.amazon.com/Lost-Connections-Uncovering-Depression-Unexpected/dp/163286830X/"
    },
    {
      title: "Reasons to Stay Alive",
      author: "Matt Haig",
      description: "A moving, funny, and joyous exploration of how to live better and feel more alive.",
      amazonLink: "https://www.amazon.com/Reasons-Stay-Alive-Matt-Haig/dp/0143128728/"
    },
    // Relationships & Communication
    {
      title: "Attached",
      author: "Amir Levine and Rachel Heller",
      description: "The science of adult attachment and how it can help you find and keep love.",
      amazonLink: "https://www.amazon.com/Attached-Science-Adult-Attachment-Help/dp/1585429139/"
    },
    {
      title: "Nonviolent Communication",
      author: "Marshall B. Rosenberg",
      description: "A language of life that helps you connect better with others and resolve conflicts peacefully.",
      amazonLink: "https://www.amazon.com/Nonviolent-Communication-Language-Life-Changing-Relationships/dp/189200528X/"
    },
    // Parenting
    {
      title: "The Whole-Brain Child",
      author: "Daniel J. Siegel and Tina Payne Bryson",
      description: "12 revolutionary strategies to nurture your child's developing mind.",
      amazonLink: "https://www.amazon.com/Whole-Brain-Child-Revolutionary-Strategies-Developing/dp/0553386697/"
    },
    {
      title: "How to Talk So Kids Will Listen & Listen So Kids Will Talk",
      author: "Adele Faber and Elaine Mazlish",
      description: "The ultimate parenting bible for effectively communicating with children.",
      amazonLink: "https://www.amazon.com/How-Talk-Kids-Will-Listen/dp/1451663889/"
    },
    // Sleep & Rest
    {
      title: "Why We Sleep",
      author: "Matthew Walker",
      description: "Unlocking the power of sleep and dreams for better health and wellbeing.",
      amazonLink: "https://www.amazon.com/Why-We-Sleep-Unlocking-Dreams/dp/1501144324/"
    },
    // Stress Management & Mindfulness
    {
      title: "Burnout",
      author: "Emily Nagoski and Amelia Nagoski",
      description: "The secret to unlocking the stress cycle and preventing emotional exhaustion.",
      amazonLink: "https://www.amazon.com/Burnout-Secret-Unlocking-Stress-Cycle/dp/1984818325/"
    },
    {
      title: "10% Happier",
      author: "Dan Harris",
      description: "How meditation helped a skeptic calm the voice in his head and find self-awareness.",
      amazonLink: "https://www.amazon.com/10-Happier-Self-Help-Actually-Works/dp/0062265431/"
    },
    // Healing from Specific Traumas
    {
      title: "When Things Fall Apart",
      author: "Pema Chödrön",
      description: "Heart advice for difficult times from a Buddhist perspective.",
      amazonLink: "https://www.amazon.com/When-Things-Fall-Apart-Difficult/dp/1611803438/"
    },
    {
      title: "The Dance of Anger",
      author: "Harriet Lerner",
      description: "A guide to changing the patterns of relationships that make you feel angry.",
      amazonLink: "https://www.amazon.com/Dance-Anger-Changing-Patterns-Relationships/dp/0062319043/"
    },
    // Purpose & Meaning
    {
      title: "Man's Search for Meaning",
      author: "Viktor E. Frankl",
      description: "A powerful memoir of survival and the search for meaning in extreme circumstances.",
      amazonLink: "https://www.amazon.com/Mans-Search-Meaning-Viktor-Frankl/dp/0807014273/"
    },
    {
      title: "Designing Your Life",
      author: "Bill Burnett and Dave Evans",
      description: "How to build a well-lived, joyful life using design thinking principles.",
      amazonLink: "https://www.amazon.com/Designing-Your-Life-Well-Lived-Joyful/dp/1101875321/"
    },
    // African American Mental Health & Wellness
    {
      title: "Black Pain: It Just Looks Like We're Not Hurting",
      author: "Terrie M. Williams",
      description: "Reveals how the African American community masks its pain and depression, offering a comprehensive look at the impact of psychological suffering in the Black community.",
      amazonLink: "https://www.amazon.com/Black-Pain-Just-Looks-Hurting/dp/074329382X/"
    },
    {
      title: "My Grandmother's Hands: Racialized Trauma and the Pathway to Mending Our Hearts and Bodies",
      author: "Resmaa Menakem",
      description: "Examines the damage caused by racism from the perspective of body-centered psychology and offers a path for healing intergenerational trauma.",
      amazonLink: "https://www.amazon.com/My-Grandmothers-Hands-Racialized-Pathway/dp/1942094477/"
    },
    {
      title: "Sister Outsider",
      author: "Audre Lorde",
      description: "A collection of essays and speeches exploring the complexities of identity as a Black woman, lesbian, mother, warrior, and poet.",
      amazonLink: "https://www.amazon.com/Sister-Outsider-Speeches-Crossing-Feminist/dp/1580911862/"
    },
    {
      title: "Homecoming: Overcome Fear and Trauma to Reclaim Your Whole, Authentic Self",
      author: "Thema Bryant",
      description: "Drawing from both clinical practice and her own experiences, Dr. Bryant offers a path toward healing and transformation for those who have experienced trauma.",
      amazonLink: "https://www.amazon.com/Homecoming-Overcome-Trauma-Reclaim-Authentic/dp/0593233158/"
    },
    {
      title: "Shifting: The Double Lives of Black Women in America",
      author: "Charisse Jones and Kumea Shorter-Gooden",
      description: "Examines the psychological impact of navigating multiple identities and the bias Black women face in various settings.",
      amazonLink: "https://www.amazon.com/Shifting-Double-Lives-Women-America/dp/0060090553/"
    },
    {
      title: "Post Traumatic Slave Syndrome: America's Legacy of Enduring Injury and Healing",
      author: "Dr. Joy DeGruy",
      description: "Explores how the trauma of slavery continues to impact African Americans today and offers strategies for healing.",
      amazonLink: "https://www.amazon.com/Post-Traumatic-Slave-Syndrome-Americas/dp/0985217278/"
    },
    {
      title: "The Unapologetic Guide to Black Mental Health",
      author: "Rheeda Walker",
      description: "Offers practical strategies for navigating mental health issues unique to Black communities while addressing barriers to treatment.",
      amazonLink: "https://www.amazon.com/Unapologetic-Guide-Black-Mental-Health/dp/1684034140/"
    },
    {
      title: "I'm Still Here: Black Dignity in a World Made for Whiteness",
      author: "Austin Channing Brown",
      description: "A powerful account of growing up Black, Christian, and female that explores how Black people learn to navigate in white spaces while maintaining their dignity.",
      amazonLink: "https://www.amazon.com/Im-Still-Here-Dignity-Whiteness/dp/1524760854/"
    },
    {
      title: "Between the World and Me",
      author: "Ta-Nehisi Coates",
      description: "Written as a letter to his son, Coates confronts the notion of race in America and how it has shaped American history and the present day experience.",
      amazonLink: "https://www.amazon.com/Between-World-Me-Ta-Nehisi-Coates/dp/0451482212/"
    },
    {
      title: "The Body Is Not an Apology: The Power of Radical Self-Love",
      author: "Sonya Renee Taylor",
      description: "Explores the connection between radical self-love and social justice, with particular attention to issues facing Black women and their bodies.",
      amazonLink: "https://www.amazon.com/Body-Not-Apology-Radical-Self-Love/dp/1626569762/"
    },
    {
      title: "Eloquent Rage: A Black Feminist Discovers Her Superpower",
      author: "Brittney Cooper",
      description: "Examines the emotional lives of Black women and the pressures they face while celebrating their strength and resilience.",
      amazonLink: "https://www.amazon.com/Eloquent-Rage-Black-Feminist-Discovers/dp/1250112575/"
    },
    {
      title: "Heavy: An American Memoir",
      author: "Kiese Laymon",
      description: "A powerful exploration of what it means to live in a Black body in America, addressing issues of weight, trauma, family, and healing.",
      amazonLink: "https://www.amazon.com/Heavy-American-Memoir-Kiese-Laymon/dp/1501125656/"
    }
  ];

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const generateRecommendations = () => {
    if (!query.trim()) {
      toast({
        title: "Please enter a topic",
        description: "Tell us what you're interested in learning about.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);

    // Combine all books
    const allAvailableBooks = [...allBooks, ...additionalBooks];

    // Simple keyword matching for demonstration
    const keywords = query.toLowerCase().split(/\s+/);
    
    const matchedBooks = allAvailableBooks.filter(book => {
      const bookText = `${book.title} ${book.author} ${book.description}`.toLowerCase();
      return keywords.some(keyword => bookText.includes(keyword));
    });

    // Sort by relevance (number of keyword matches)
    const scoredBooks = matchedBooks.map(book => {
      const bookText = `${book.title} ${book.author} ${book.description}`.toLowerCase();
      const score = keywords.reduce((count, keyword) => {
        return count + (bookText.includes(keyword) ? 1 : 0);
      }, 0);
      return { ...book, score };
    });

    scoredBooks.sort((a, b) => (b.score || 0) - (a.score || 0));

    // Timeout to simulate processing
    setTimeout(() => {
      setRecommendations(scoredBooks.slice(0, 3));
      setIsGenerating(false);
      
      if (scoredBooks.length === 0) {
        toast({
          title: "No matches found",
          description: "Try different keywords or browse our curated lists above.",
        });
      }
    }, 800);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      generateRecommendations();
    }
  };

  return (
    <div className="bg-muted/30 rounded-lg p-6 sm:p-8 shadow-sm border border-muted">
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bookmania mb-2">Personalized Book Finder</h2>
        <p className="text-muted-foreground">
          Describe what you're looking for, and we'll suggest books that might help.
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            value={query}
            onChange={handleQueryChange}
            onKeyDown={handleKeyDown}
            placeholder="e.g., coping with anxiety, mindfulness techniques, grief recovery..."
            className="pl-9 py-6"
          />
        </div>
        <Button
          onClick={generateRecommendations}
          disabled={isGenerating}
          className="bg-gold hover:bg-gold/80 text-noir-vigne"
        >
          {isGenerating ? "Finding Books..." : "Find Books"}
        </Button>
      </div>

      {recommendations.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-bookmania mb-4">Suggested Reads</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recommendations.map((book, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-md transition-all">
                <CardContent className="p-4 flex flex-col h-full">
                  <div className="mb-2 flex-grow">
                    <h4 className="font-bookmania text-lg font-medium mb-1">{book.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">by {book.author}</p>
                    <p className="text-sm line-clamp-3">{book.description}</p>
                  </div>
                  <a
                    href={book.amazonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:text-egyptian-earth text-sm font-medium inline-flex items-center mt-2"
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

      {isGenerating && (
        <div className="flex flex-col items-center justify-center py-8">
          <div className="relative">
            <BookOpen className="h-12 w-12 text-gold animate-pulse" />
          </div>
          <p className="mt-4 text-muted-foreground">Finding the perfect books for you...</p>
        </div>
      )}
    </div>
  );
};

export default BookRecommendationGenerator;
