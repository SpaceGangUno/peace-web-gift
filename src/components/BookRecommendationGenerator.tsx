
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
