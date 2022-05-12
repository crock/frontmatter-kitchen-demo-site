import { Link } from "gatsby"
import React from "react"
import { Wrapper } from "../components/core"
import Seo from "../components/Seo"
import { useSiteMetadata } from "../hooks/"

const features = [
	"Typescript",
	"Styled with Tailwind, styled-components, and twin.macro",
	"Custom seo component",
	"Custom pagination component",
	"Custom React hook for statically fetching metadata about the site and displaying it anywhere",
	"Storybook configured",
	"Supports either Disqus or JamComments.com commenting system",
]

const IndexPage = () => {
	const { siteTitle } = useSiteMetadata()

	return (
		<Wrapper className="px-4 py-10">
			<Seo title="Demo" />
			<nav className="my-4 flex flex-row flex-nowrap justify-start items-center">
				<a
					className="underline font-semibold text-primary hover:text-primary-light py-1 px-2"
					target={`_blank`}
					href="https://github.com/crock/gatsby-starter-frontmatter-kitchen"
				>
					GitHub
				</a>
				<Link
					className="underline font-semibold text-primary hover:text-primary-light py-1 px-2"
					to="/blog"
				>
					Blog
				</Link>
			</nav>
			<h1 className="font-black text-2xl mb-3">{siteTitle}</h1>
			<div className="font-normal text-base leading-6">
				<p>
					<code>gatsby-starter-frontmatter-kitchen</code> is a Gatsby
					4.x.x starter site for a markdown-sourced niche blog.
				</p>
				<h3 className="font-black font-xl mt-4 mb-2 uppercase">
					Features:
				</h3>
				<ul className="list-disc list-inside">
					{features.map((feature) => (
						<li key={feature}>{feature}</li>
					))}
				</ul>
				<h3 className="font-black font-xl mt-4 mb-2 uppercase">
					Special Thanks:
				</h3>
				<ul className="list-disc list-inside">
					<li>
						Thanks to <a href="https://macarthur.me/?ref=gatsby-starter-frontmatter-kitchen" target="_blank">Alex McArhtur</a> for creating <a href="https://jamcomments.com/?ref=gatsby-starter-frontmatter-kitchen" target="_blank">a wonderful, JAMstack alternative</a> to Disqus comments.
					</li>
				</ul>
			</div>
		</Wrapper>
	)
}

export default IndexPage
