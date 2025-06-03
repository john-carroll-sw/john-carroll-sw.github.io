import { Card } from "@/components/ui/card"

const techStack = [
	// Core programming and UI
	{
		title: "Languages & Scripting",
		items: [
			"Bash",
			"C#",
			"Go",
			"Java",
			"JavaScript / TypeScript",
			"PowerShell",
			"Python",
			"Rust",
			"Zsh",
		],
	},
	{
		title: "Frontend / Mobile",
		items: [
			"Angular",
			"Bootstrap",
			"Material UI",
			"Next.js",
			"React",
			"React Native",
			"Swift",
			"Tailwind CSS",
			"Unity (XR)",
			"Unreal Engine",
			"Vue 3",
		],
	},
	{
		title: "Backend & APIs",
		items: [
			".NET Core",
			"Chainlit",
			"Django",
			"FastAPI",
			"Flask",
			"GraphQL",
			"Java Spring",
			"Node.js / Express",
			"Quart",
			"REST",
			"Streamlit",
			"Stripe SDK",
		],
	},
	// Data, search, messaging
	{
		title: "Data",
		items: [
			"Cosmos DB",
			"MongoDB",
			"MySQL",
			"Neo4j",
			"PostgreSQL",
			"Redis",
			"SQL",
			"Vector DB",
		],
	},
	{
		title: "Search",
		items: [
			"Azure AI Search",
			"Azure Maps",
			"Bing API",
			"Google API",
			"Lucene Index",
			"OpenSearch",
			"OpenStreetMap",
			"RAG patterns",
		],
	},
	{
		title: "Messaging & Streaming",
		items: [
			"AWS SNS/SQS",
			"Azure Event Grid",
			"Azure Event Hubs",
			"IoT Telemetry",
			"Kafka",
			"RabbitMQ",
			"Service Bus",
		],
	},
	// AI/ML
	{
		title: "AI Technologies",
		items: [
			"Anthropic Claude",
			"A2A",
			"Azure OpenAI",
			"Gemini",
			"Grok",
			"LangChain",
			"MCP",
			"PromptFlow",
			"Qwen",
			"Semantic Kernel",
			"AutoGen",
		],
	},
	{
		title: "ML Frameworks",
		items: [
			"JAX",
			"Keras",
			"LightGBM",
			"MXNet",
			"ONNX",
			"PyTorch",
			"Scikit-learn",
			"TensorFlow",
			"XGBoost",
		],
	},
	// Cloud, DevOps, tools, visualization
	{
		title: "Cloud & Hosting",
		items: [
			"AWS",
			"Firebase",
			"GCP",
			"Microsoft Azure",
			"Service Fabric",
			"Vercel",
		],
	},
	{
		title: "DevOps & IaC",
		items: [
			"ARM Templates",
			"Azure DevOps",
			"Bicep",
			"Docker",
			"GitHub Actions",
			"Kubernetes",
			"Terraform",
		],
	},
	{
		title: "Dev Tools",
		items: [
			"Cursor.ai",
			"GitHub Copilot",
			"npm",
			"yarn",
			"pnpm",
			"Vite",
			"Cargo",
			"v0.dev",
		],
	},
	{
		title: "Design & Visualization",
		items: [
			"D3.js",
			"Figma",
			"Mapbox GL",
			"Power BI",
			"React Flow",
			"Unity 3-D",
			"WordPress",
		],
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
	return (
		<div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
			{techStack.map((card, cardIdx) => (
				<Card key={card.title} className="p-6 flex flex-col h-full">
					<h3 className="text-lg font-semibold mb-4 text-balance">
						{card.title}
					</h3>
					<div className="flex flex-wrap gap-2">
						{card.items.map((item) => (
							<span
								key={item}
								className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium whitespace-nowrap bg-black/30 backdrop-blur-sm ${cardColors[cardIdx % cardColors.length]}`}
							>
								{item}
							</span>
						))}
					</div>
				</Card>
			))}
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
