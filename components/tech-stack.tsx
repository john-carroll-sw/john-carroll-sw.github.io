import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"

const techStack = [
	{
		title: "Languages",
		items: [
			"C#",
			"C++",
			"Go",
			"Java",
			"JavaScript / TypeScript",
			"PHP",
			"Python",
			"Rust",
			"Swift",
		].sort(),
	},
	{
		title: "Front-End / Mobile",
		items: [
			"Angular",
			"CSS",
			"Electron",
			"Flutter",
			"HTML",
			"JavaScript",
			"jQuery",
			"Less",
			"Next.js",
			"React",
			"React Native",
			"Sass",
			"Scss",
			"Tailwind CSS",
			"TypeScript",
			"Vue",
			"Xamarin",
		].sort(),
	},
	{
		title: "Back-End Frameworks",
		items: [
			".NET Core",
			"ASP.NET",
			"Azure Functions",
			"Django",
			"Express.js",
			"FastAPI",
			"Flask",
			"gRPC",
			"GraphQL",
			"Java Spring",
			"Logic Apps",
			"Node.js / Express",
			"OpenAPI",
			"Quart",
		].sort(),
	},
	{
		title: "Data & Storage",
		items: [
			"Azure SQL",
			"Azure Storage",
			"Cassandra",
			"Cosmos DB",
			"DynamoDB",
			"Firebase Firestore",
			"Milvus",
			"MongoDB",
			"MySQL",
			"Neo4j",
			"Oracle",
			"Pinecone",
			"PostgreSQL",
			"Redis",
			"SQL",
			"SQL Server",
			"SQLite",
		].sort(),
	},
	{
		title: "Messaging & Streaming",
		items: [
			"APIM",
			"AWS SNS/SQS",
			"Azure Event Grid",
			"Azure Event Hubs",
			"Azure Service Bus",
			"gRPC",
			"IoT Telemetry",
			"Kafka",
			"MQTT",
			"OpenTelemetry",
			"RabbitMQ",
		].sort(),
	},
	{
		title: "Search & Geo",
		items: [
			"Azure AI Search",
			"Azure Maps",
			"Bing Maps",
			"Elasticsearch",
			"Google Maps",
			"Leaflet",
			"Lucene",
			"MapBox",
			"OpenSearch",
			"OpenStreetMap",
			"Solr",
		].sort(),
	},
	{
		title: "AI Stacks",
		items: [
			"A2A (Google)",
			"Anthropic Claude",
			"AutoGen",
			"Azure ML",
			"Azure OpenAI",
			"Cohere",
			"Copilot",
			"CrewAI",
			"DALL-E",
			"Gemini",
			"GitHub Copilot",
			"Gradio",
			"Grok",
			"Hugging Face",
			"LangChain",
			"LangGraph",
			"Llama Index",
			"MCP (Anthropic)",
			"Mistral AI",
			"ONNX Runtime",
			"OpenAI",
			"Qwen",
			"Semantic Kernel",
			"Stable Diffusion",
		].sort(),
	},
	{
		title: "ML Frameworks",
		items: [
			"Keras",
			"NumPy",
			"ONNX",
			"OpenCV",
			"OpenML",
			"Pandas",
			"PyTorch",
			"Scikit-learn",
			"SciPy",
			"Tesseract",
			"TensorFlow",
			"Transformers",
			"XGBoost",
		].sort(),
	},
	{
		title: "DevOps & IaC",
		items: [
			"Ansible",
			"Azure DevOps",
			"Bicep / ARM",
			"CircleCI",
			"Docker",
			"GitHub Actions",
			"GitLab CI/CD",
			"Helm",
			"Jenkins",
			"Kubernetes",
			"Log Analytics",
			"Terraform",
			"Travis CI",
		].sort(),
	},
	{
		title: "Cloud & Hosting",
		items: [
			"AWS",
			"Azure App Service",
			"Azure Container Apps",
			"Firebase",
			"GCP",
			"Microsoft Azure",
			"Netlify",
			"Render",
			"Service Fabric",
			"Vercel",
			"VMWare Tanzu",
		].sort(),
	},
	{
		title: "Design & Visualization",
		items: [
			"Chainlit",
			"Chart.js",
			"D3.js",
			"Figma",
			"Highcharts",
			"Kibana",
			"Leaflet",
			"Lucidchart",
			"Mapbox GL",
			"Material UI",
			"Matplotlib",
			"Plotly",
			"Power BI",
			"React Flow",
			"Storybook",
			"Streamlit",
			"Three.js",
			"WordPress",
		].sort(),
	},
	{
		title: "XR & Game Engines",
		items: [
			"A-Frame",
			"Babylon.js",
			"Godot",
			"OpenGL",
			"Three.js",
			"Unity",
			"Unreal Engine",
			"WebGL",
			"WebXR",
		].sort(),
	},
	{
		title: "Dev Tools",
		items: [
			"Cargo",
			"Cypress",
			"Docker Compose",
			"Entra ID",
			"ESLint",
			"Git",
			"GitHub Copilot",
			"GitLab",
			"Jest",
			"JetBrains IDEA",
			"Jira",
			"JUnit",
			"Maven",
			"OAuth 2.0",
			"OIDC",
			"Playwright",
			"Postman",
			"Prettier",
			"PyTest",
			"SonarQube",
			"Swagger",
			"Vite",
			"VSCode",
			"Webpack",
		].sort(),
	},
	{
		title: "Shell & CLI",
		items: [
			"azd",
			"Azure CLI",
			"AWS CLI",
			"Bash",
			"curl",
			"GNU tools",
			"npx",
			"npm",
			"Oh My Zsh",
			"pnpm",
			"PowerShell",
			"scp",
			"ssh",
			"tmux",
			"wget",
			"Yarn",
			"Zsh",
		].sort(),
	},
	{
		title: "Operating Systems",
		items: [
			"Android",
			"CentOS",
			"iOS",
			"Linux",
			"macOS",
			"Ubuntu",
			"Windows",
			"Windows Server",
		].sort(),
	},
]

// Color map by card index for consistent, modern badge style
const cardColors = [
	"border-blue-400 text-blue-300",
	"border-teal-400 text-teal-300",
	"border-purple-400 text-purple-300",
	"border-pink-400 text-pink-300",
	"border-yellow-400 text-yellow-300",
	"border-green-400 text-green-300",
	"border-orange-400 text-orange-300",
	"border-indigo-400 text-indigo-300",
	"border-red-400 text-red-300",
	"border-cyan-400 text-cyan-300",
	"border-fuchsia-400 text-fuchsia-300",
	"border-emerald-400 text-emerald-300",
	"border-sky-400 text-sky-300",
]

export default function TechStack() {
	const [openIdx, setOpenIdx] = useState<number | null>(null)
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const mq = window.matchMedia("(max-width: 639px)")
		const handleResize = () => setIsMobile(mq.matches)
		handleResize()
		mq.addEventListener("change", handleResize)
		return () => mq.removeEventListener("change", handleResize)
	}, [])

	return (
		<div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
			{techStack.map((card, cardIdx) => {
				const expanded = !isMobile || openIdx === cardIdx
				return (
					<Card key={card.title} className="p-6 flex flex-col h-full">
						<button
							type="button"
							className={`text-lg font-semibold text-balance flex justify-between items-center w-full sm:cursor-default sm:pointer-events-none focus:outline-none ${expanded ? "mb-4" : ""}`}
							onClick={() => isMobile ? setOpenIdx(openIdx === cardIdx ? null : cardIdx) : undefined}
							aria-expanded={expanded}
							aria-controls={`card-content-${cardIdx}`}
						>
							{card.title}
							<span className="sm:hidden ml-2">{expanded ? "▲" : "▼"}</span>
						</button>
						<div
							id={`card-content-${cardIdx}`}
							className={`transition-all duration-200 ${expanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"} sm:max-h-full sm:opacity-100 sm:overflow-visible flex flex-wrap gap-2`}
						>
							{card.items.map((item) => (
								<span
									key={item}
									className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium whitespace-nowrap border transition-colors
      bg-white text-gray-900 ${cardColors[cardIdx % cardColors.length]}
      dark:bg-black/30 dark:text-inherit dark:${cardColors[cardIdx % cardColors.length]}
      dark:backdrop-blur-sm
    `}
								>
									{item}
								</span>
							))}
						</div>
					</Card>
				)
			})}
		</div>
	)
}

// Placeholder sections below the tech stack grid
export function PortfolioPlaceholders() {
	return (
		<div className="mt-12 space-y-10">
			<section>
				<h2 className="text-xl font-bold mb-2">Career Timeline</h2>
				<p className="text-muted-foreground">
					Coming soon: a visual timeline of my career journey, roles, and key
					milestones.
				</p>
			</section>
			<section>
				<h2 className="text-xl font-bold mb-2">Speaking Engagements</h2>
				<p className="text-muted-foreground">
					Talks, workshops, and panels at conferences and meetups will be listed
					here.
				</p>
			</section>
			<section>
				<h2 className="text-xl font-bold mb-2">Blogs Published</h2>
				<p className="text-muted-foreground">
					A curated list of my published blog posts and articles is coming soon.
				</p>
			</section>
			<section>
				<h2 className="text-xl font-bold mb-2">Stealth Startup Work</h2>
				<p className="text-muted-foreground">
					Details about my recent stealth startup projects will appear here when
					public.
				</p>
			</section>
		</div>
	)
}
