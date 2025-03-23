import type { BlogPost } from "./blog-post";
import type { Hero } from "./hero";
import type { LatestProperty } from "./latest-property";
import type { Testimonial } from "./testimonial";

export type PageData = {
    hero: Hero;
    latest: LatestProperty[];
    testimonials: Testimonial[];
    blogs: BlogPost[];
};