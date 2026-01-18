'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

export default function EditorPage() {
    const { toast } = useToast();

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        toast({
            title: "Article Published!",
            description: "Your article is now live. (This is a demo)",
        });
    }

    function handleSaveDraft(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        toast({
            title: "Draft Saved!",
            description: "Your changes have been saved. (This is a demo)",
        });
    }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-headline font-bold">Write a new article</h1>
        <p className="text-muted-foreground">Share your planning perspective with the world.</p>
      </header>
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-6">
        <div>
          <Label htmlFor="title" className="text-lg">Title</Label>
          <Input id="title" placeholder="The title of your article" className="mt-2 text-2xl h-14 font-headline" />
        </div>
        <div>
          <Label htmlFor="content" className="text-lg">Content</Label>
          <Textarea
            id="content"
            placeholder="Start writing your masterpiece here..."
            className="mt-2 min-h-[400px] text-base"
          />
        </div>
        <div className="flex justify-end space-x-4">
          <Button variant="outline" onClick={handleSaveDraft}>Save Draft</Button>
          <Button type="submit">Publish Article</Button>
        </div>
      </form>
    </div>
  );
}
