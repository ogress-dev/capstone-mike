import { Link } from "react-router-dom";
import { ArrowLeft, FileText, Video, Image, Globe, Presentation, BookOpen } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const Capstone = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </Link>
          <h1 className="font-heading text-xl md:text-2xl font-semibold text-foreground">
            Capstone Project
          </h1>
          <div className="w-16" />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="resume" className="w-full">
          <TabsList className="w-full flex-wrap h-auto gap-2 bg-transparent p-0 mb-8">
            <TabsTrigger value="resume" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <FileText className="h-4 w-4 mr-2 hidden sm:inline" />
              Resume
            </TabsTrigger>
            <TabsTrigger value="autobiography" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <BookOpen className="h-4 w-4 mr-2 hidden sm:inline" />
              Autobiography
            </TabsTrigger>
            <TabsTrigger value="autobiography-presentation" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Presentation className="h-4 w-4 mr-2 hidden sm:inline" />
              Auto. Presentation
            </TabsTrigger>
            <TabsTrigger value="innovation-video" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Video className="h-4 w-4 mr-2 hidden sm:inline" />
              Innovation Video
            </TabsTrigger>
            <TabsTrigger value="innovation-presentation" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Presentation className="h-4 w-4 mr-2 hidden sm:inline" />
              Innovation Pres.
            </TabsTrigger>
            <TabsTrigger value="african-culture-video" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Video className="h-4 w-4 mr-2 hidden sm:inline" />
              Culture Video
            </TabsTrigger>
            <TabsTrigger value="african-culture-presentation" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Presentation className="h-4 w-4 mr-2 hidden sm:inline" />
              Culture Pres.
            </TabsTrigger>
            <TabsTrigger value="modern-challenge" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Video className="h-4 w-4 mr-2 hidden sm:inline" />
              Modern Challenge
            </TabsTrigger>
            <TabsTrigger value="photographic-essay" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Image className="h-4 w-4 mr-2 hidden sm:inline" />
              Photo Essay
            </TabsTrigger>
            <TabsTrigger value="online-presence" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Globe className="h-4 w-4 mr-2 hidden sm:inline" />
              Online Presence
            </TabsTrigger>
          </TabsList>

          {/* Resume Tab with Sub-tabs */}
          <TabsContent value="resume" className="animate-fade-in">
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6">Resume</h2>
              <Tabs defaultValue="english" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="kikuyu">Kikuyu</TabsTrigger>
                  <TabsTrigger value="english">English</TabsTrigger>
                  <TabsTrigger value="kiswahili">Kiswahili</TabsTrigger>
                </TabsList>
                <TabsContent value="kikuyu" className="animate-fade-in">
                  <div className="min-h-[400px] flex items-center justify-center text-muted-foreground">
                    <a href="/michael%20wamiti%20cv%20kikuyu.pdf" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                      View Kikuyu Resume
                    </a>
                  </div>
                </TabsContent>
                <TabsContent value="english" className="animate-fade-in">
                  <div className="min-h-[400px] flex items-center justify-center text-muted-foreground">
                    <a href="/michael%20wamiti%20cv%20english.pdf" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                      View English Resume
                    </a>
                  </div>
                </TabsContent>
                <TabsContent value="kiswahili" className="animate-fade-in">
                  <div className="min-h-[400px] flex items-center justify-center text-muted-foreground">
                    <a href="/michael%20wamiti%20cv%20kiswahili.pdf" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                      View Kiswahili Resume
                    </a>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </TabsContent>

          {/* Autobiography Essay Tab */}
          <TabsContent value="autobiography" className="animate-fade-in">
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6">Autobiography Essay</h2>
              <div className="min-h-[400px] flex items-center justify-center text-muted-foreground">
                <a href="/michael%20autobiography.pdf" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  View Autobiography
                </a>
              </div>
            </div>
          </TabsContent>

          {/* Autobiography Presentation Tab */}
          <TabsContent value="autobiography-presentation" className="animate-fade-in">
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6">Autobiography Presentation</h2>
              <div className="min-h-[400px] flex items-center justify-center text-muted-foreground">
                <a href="/auto_presssss.pdf" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  View Autobiography Presentation
                </a>
              </div>
            </div>
          </TabsContent>

          {/* Innovation Video Tab */}
          <TabsContent value="innovation-video" className="animate-fade-in">
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6">Innovation/Invention Video</h2>
              <div className="min-h-[400px] flex items-center justify-center text-muted-foreground">
                <a href="https://drive.google.com/file/d/1prmsPKzQUKqWJjL-WqRdVmi54D3y64sx/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  Watch Innovation Video
                </a>
              </div>
            </div>
          </TabsContent>

          {/* Innovation Presentation Tab */}
          <TabsContent value="innovation-presentation" className="animate-fade-in">
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6">Innovation/Invention Presentation</h2>
              <div className="min-h-[400px] flex items-center justify-center text-muted-foreground">
                <a href="/inv_press.pdf" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  View Innovation Presentation
                </a>
              </div>
            </div>
          </TabsContent>

          {/* African Culture Video Tab */}
          <TabsContent value="african-culture-video" className="animate-fade-in">
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6">African Culture Video</h2>
              <div className="min-h-[400px] flex items-center justify-center text-muted-foreground">
                <a href="https://drive.google.com/file/d/1zwBqwaSY3CAlzUT0EwyH9rGzl6p2L6PP/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  Watch African Culture Video
                </a>
              </div>
            </div>
          </TabsContent>

          {/* African Culture Presentation Tab */}
          <TabsContent value="african-culture-presentation" className="animate-fade-in">
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6">African Culture Presentation</h2>
              <div className="min-h-[400px] flex items-center justify-center text-muted-foreground">
                <a href="/african_presss.pdf" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  View African Culture Presentation
                </a>
              </div>
            </div>
          </TabsContent>

          {/* Modern Challenge Video Tab */}
          <TabsContent value="modern-challenge" className="animate-fade-in">
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6">Modern Challenge Video</h2>
              <div className="min-h-[400px] flex items-center justify-center text-muted-foreground">
                <a href="https://drive.google.com/file/d/1MBCaSz5_neO4qDL2X9IcTfkadeotJPaR/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  Watch Modern Challenge Video
                </a>
              </div>
            </div>
          </TabsContent>

          {/* Photographic Essay Tab */}
          <TabsContent value="photographic-essay" className="animate-fade-in">
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6">Photographic Essay</h2>
              <div className="min-h-[400px] flex items-center justify-center text-muted-foreground">
                <a href="/michael%20wamiti%20Photographic%20essay.pdf" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  View Photographic Essay
                </a>
              </div>
            </div>
          </TabsContent>

          {/* Professional Online Presence Tab */}
          <TabsContent value="online-presence" className="animate-fade-in">
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6">Professional Online Presence</h2>
              <div className="min-h-[400px] flex flex-col items-center justify-center text-muted-foreground space-y-4">
                <a href="https://www.instagram.com/FootyFlex254" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  Instagram: FootyFlex254
                </a>
                <a href="https://www.tiktok.com/@FootyFlex254" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  TikTok: FootyFlex254
                </a>
                <a href="https://www.facebook.com/michey.wamiti/" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  Facebook: Michey Wamiti
                </a>
                <a href="https://twitter.com/MICHAEL08484384" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  Twitter: MICHAEL08484384
                </a>
                <a href="https://www.linkedin.com/in/michael-kiarie" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  LinkedIn: Michael Kiarie
                </a>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Capstone;
