import { Button } from "@/components/ui/button"
import { ArrowRight, CalendarDays, Clock, Facebook, Link, Link2, Linkedin, Minus, Send, Twitter } from "lucide-react"
import Image from "next/image"
import parse from 'html-react-parser';
import { content } from "@/constants";

const SlugPage = ({params}: {params: {slug:string}}) => {
    return (
        <div className="pt-[15vh] max-w-5xl mx-auto">
            <h1 className="lg-text-6xl md:text-5xl text-4xl font-creteRound">
                The AGI hype train is running out of steam
            </h1>

            <div className="flex items-center flex-wrap max-md:justify-center gap-4 mt-4">
                <div className="flex items-center gap-2">
                    <Image
                    src={'/author/thomas-macaulay.jpg'}
                    alt="author"
                    width={30}
                    height={30}
                    className="object-cover rounded-md"
                    />
                    <p>by Shokhrukh</p>
                </div>
                <Minus/>
                <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5"/>
                    <p>01 min read</p>
                </div>
                <Minus/>
                <div className="flex items-center gap-2">
                    <CalendarDays className="w-5 h-5"/>
                    <p>01 min read</p>
                </div>
            </div>

            <Image
            src={'/blogs/01.jpg'}
            alt="blog"
            width={'1120'}
            height={'595'}
            className="mt-4 rounded-md"
            />

            <div className="flex md:gap-12 max-md:flex-col-reverse mt-12 relative">
                <div className="flex flex-col space-y-3">
                    <div className="sticky top-36">
                        <p className="text-lg uppercase text-muted-foreground">Share</p>

                        <div className="flex flex-col max-md:flex-row md:space-y-3 max-md:space-x-3 mt-4">
                            <Button size={'icon'} variant={'outline'}>
                                <Twitter/>
                            </Button>
                            <Button size={'icon'} variant={'outline'}>
                                <Facebook/>
                            </Button>
                            <Button size={'icon'} variant={'outline'}>
                                <Linkedin/>
                            </Button><Button size={'icon'} variant={'outline'}>
                                <Send/>
                            </Button>
                            <Button size={'icon'} variant={'outline'}>
                                <Link2/>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="flex-1 prose dark:prose-invert">
                    {parse(content)}
                </div>
            </div>

            <div className="flex mt-6 gap-6 items-center max-md:flex-col">
                <Image
                src={'/author/thomas-macaulay.jpg'}
                alt="author"
                width={'155'}
                height={'155'}
                className="rounded-md max-md:self-start"
                />
                <div className="flex-1 flex flex-col space-y-4">
                    <h2 className="text-3xl font-creteRound">Thomas Macaulay</h2>
                    <p className="line-clamp-2 text-muted-foreground">
                        Thomas Macaulay is a writer based in New York City. He is interested in all things tech, science, and photography related, and likes to to-to in
                    </p>
                    <Link
                    href={'/'}
                    className="flex items-center gap-2 hover:text-blue-500 underline transition-colors"
                    >
                    <span>See all posts by this author</span>
                    <ArrowRight/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SlugPage