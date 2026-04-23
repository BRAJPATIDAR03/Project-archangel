window.PHASES_DATA = [
  {
    id: 1, label: "Phase 1", title: "Absolute Foundations",
    weeks: "1–6", duration: "6 weeks",
    color: "#6378ff", emoji: "🌱",
    desc: "Build unbreakable fundamentals. CS theory, Python mastery, Git, terminal. The base every recruiter expects.",
    chips: [
      {text:"Python",color:"#a5b4fc"},{text:"Git & GitHub",color:"#86efac"},
      {text:"Linux CLI",color:"#fcd34d"},{text:"CS Theory",color:"#d8b4fe"}
    ],
    weeks_data: [
      {
        num: 1, title: "Computer Science Foundations + Dev Environment",
        subtitle: "Setup your battlefield. Understand HOW computers really work.",
        days: [
          { title:"Install & Configure Dev Environment", desc:"VS Code, Python 3.12, Git, WSL/Terminal, Node.js. Create GitHub account. Configure SSH keys.", tags:["build"], trick:"Set up everything in one session. Refer to official docs — 'learn to read docs' is skill #1.", hours:"4h" },
          { title:"How Computers Work: Binary, Memory, CPU", desc:"Binary/hex, RAM vs CPU vs storage, OS basics. Watch Crash Course CS episodes 1-3.", tags:["learn","review"], trick:"Create Anki cards for: binary, RAM, CPU cycle, OS scheduler. 5 cards today.", hours:"5h" },
          { title:"Data Structures Part 1: Arrays & Linked Lists", desc:"Implement array and linked list in Python from scratch. Visualize memory allocation.", tags:["learn","build"], trick:"Draw diagrams on paper first. Feynman: explain to yourself why linked list insert is O(1).", hours:"5h" },
          { title:"Data Structures Part 2: Stacks, Queues, Hash Maps", desc:"Implement each from scratch. Solve 3 easy LeetCode problems using each.", tags:["learn","practice"], trick:"LeetCode: Two Sum, Valid Parentheses, Contains Duplicate. Timer on — simulate real pressure.", hours:"5h" },
          { title:"Git Mastery: Version Control Deep Dive", desc:"init, clone, add, commit, push, branch, merge, rebase, stash, PR workflow. Build a sample project and push to GitHub.", tags:["build","learn"], trick:"Create a public repo today. Future employers WILL check it. Every day from now: commit something.", hours:"5h" },
        ]
      },
      {
        num: 2, title: "Python Mastery: From Basics to Pythonic Code",
        subtitle: "Python is the universal language of AI, Data, and DevOps. Master it deeply.",
        days: [
          { title:"Python Core: Variables, Loops, Functions, OOP", desc:"Write 10 functions solving real problems. Understand mutable vs immutable. Classes, __init__, self.", tags:["learn","practice"], trick:"Challenge: rewrite any phone tool you use (calculator, todo list) in Python CLI. Real motivation.", hours:"5h" },
          { title:"Python Advanced: Decorators, Context Managers, Generators", desc:"Learn with @property, @staticmethod, with statements, yield. Write a lazy file reader using generator.", tags:["learn","build"], trick:"Feynman: explain 'generator' vs 'list' with a real-world analogy (assembly line vs warehouse).", hours:"5h" },
          { title:"Python OOP Project: Build a Library System", desc:"Classes: Book, Member, Library with borrow/return logic. Use inheritance. Write to JSON.", tags:["build","project"], trick:"Commit this project to GitHub with a proper README. First portfolio piece!", hours:"5h" },
          { title:"Python Data Handling: Files, JSON, CSV, APIs", desc:"Read/write files, parse JSON & CSV, make your first HTTP request with requests library. Consume a public API.", tags:["build","learn"], trick:"Use OpenWeather or CoinGecko free API. Build a weather CLI tool.", hours:"5h" },
          { title:"Python Testing & Code Quality", desc:"unittest, pytest basics. Write tests for your Library System. Use Black formatter and Flake8 linter.", tags:["build","practice"], trick:"Pro move: TDD (Test Driven Development) — write test first, then code. Used at every big tech company.", hours:"4h" },
        ]
      },
      {
        num: 3, title: "SQL & Databases: The Language Recruiters Always Test",
        subtitle: "SQL is tested in 90% of tech interviews. Data is everywhere — own it.",
        days: [
          { title:"SQL Fundamentals: SELECT, WHERE, JOIN, GROUP BY", desc:"Install PostgreSQL. Create tables, insert data, write 20 queries. Join at least 3 tables.", tags:["learn","practice"], trick:"Use a real dataset (Netflix shows, Spotify data from Kaggle). Make it interesting.", hours:"5h" },
          { title:"Advanced SQL: CTEs, Window Functions, Indexing", desc:"WITH clauses, ROW_NUMBER(), RANK(), PARTITION BY, query optimization. Explain plan.", tags:["learn","practice"], trick:"Window functions are asked in 80% of data engineer interviews. Master this day.", hours:"5h" },
          { title:"Database Design: ERD, Normalization, Relationships", desc:"Design a Twitter-like schema. 1NF/2NF/3NF, foreign keys, indexes, constraints.", tags:["learn","build"], trick:"Draw ERD on paper. Recruiting test: 'Design the database for Uber' — practiced exactly this.", hours:"5h" },
          { title:"NoSQL: MongoDB Basics + Use Cases", desc:"When to use SQL vs NoSQL. Install MongoDB. CRUD a document store for a blogging platform.", tags:["learn","build"], trick:"Rule of thumb: user-facing apps → NoSQL for flexibility. Analytics → SQL for power.", hours:"5h" },
          { title:"SQL Projects: Build an Analytics Dashboard Query Set", desc:"Dataset: e-commerce orders. Write 10 complex analytical queries. Cohort analysis, retention, revenue.", tags:["project","build"], trick:"This exact project on GitHub with README demonstrates real data analyst skills.", hours:"4h" },
        ]
      },
      {
        num: 4, title: "Web Fundamentals + React: The Frontend Foundation",
        subtitle: "Every tech interview has a frontend component. React is the standard.",
        days: [
          { title:"HTML5 & CSS3: Semantic Structure + Modern Layouts", desc:"Semantic HTML, Flexbox, CSS Grid, responsive design. Build a personal portfolio page.", tags:["learn","build"], trick:"Use CSS Grid for layout, Flexbox for components. Non-negotiable rule for 2025.", hours:"5h" },
          { title:"JavaScript ES6+ Core Concepts", desc:"const/let, arrow functions, destructuring, spread/rest, modules, async/await, Promises.", tags:["learn","practice"], trick:"Master async/await completely. It's the most common JS interview topic. Build 5 tiny exercises.", hours:"5h" },
          { title:"React Part 1: Components, Props, State, Hooks", desc:"Build a Task Manager app with useState, useEffect. Functional components only. Props drilling.", tags:["build","learn"], trick:"Build real apps, not tutorials. The Task Manager app is portfolio-worthy.", hours:"6h" },
          { title:"React Part 2: Context, useReducer, React Router", desc:"Multi-page app with routing. State management with Context API. Add authentication flow.", tags:["build","learn"], trick:"Implement a login/logout flow. Every startup app needs auth. You'll reuse this pattern.", hours:"6h" },
          { title:"React Project: Personal Portfolio Website", desc:"Deploy your portfolio site. Include: About, Projects, Skills, Contact. Use GitHub Pages or Vercel.", tags:["project","deploy"], trick:"LIVE URL on resume = instant credibility. Deploy to Vercel in 5 min. Free forever.", hours:"3h" },
        ]
      },
      {
        num: 5, title: "Python Backend: FastAPI + REST APIs",
        subtitle: "Backend APIs are the backbone of every tech product. FastAPI is the fastest-growing Python framework.",
        days: [
          { title:"HTTP, REST APIs, JSON: How the Web Works", desc:"HTTP methods, status codes, headers, REST principles, JSON structure. Use Postman to test public APIs.", tags:["learn"], trick:"Postman is used daily by every backend developer. Set it up and test 3 public APIs today.", hours:"4h" },
          { title:"FastAPI Part 1: Routes, Request Models, Pydantic", desc:"Build a TODO API with CRUD. Pydantic validation, path/query params, request bodies.", tags:["build","learn"], trick:"FastAPI auto-generates Swagger docs. Show this to any recruiter — they'll be impressed.", hours:"6h" },
          { title:"FastAPI Part 2: Authentication, JWT, Middleware", desc:"Implement JWT auth, OAuth2 with Password Flow, CORS middleware, rate limiting.", tags:["build","learn"], trick:"Every production API has auth. Build this pattern once by heart — reuse it forever.", hours:"6h" },
          { title:"Connect FastAPI to PostgreSQL (SQLAlchemy + Alembic)", desc:"ORM models, relationships, async DB queries, database migrations.", tags:["build","learn"], trick:"Alembic is migration tool. Never delete DB columns manually. Master this.", hours:"6h" },
          { title:"Deploy Your First API to the Cloud", desc:"Deploy FastAPI app to Railway or Render. Set up environment variables, SSL. Share the live URL.", tags:["deploy","project"], trick:"LIVE API URL on GitHub README = 10× more recruiter attention. Do this today.", hours:"3h" },
        ]
      },
      {
        num: 6, title: "DSA & Problem Solving: Beat the Technical Interview",
        subtitle: "Data Structures & Algorithms are tested at every FAANG interview. Non-negotiable.",
        days: [
          { title:"Big O Notation + Sorting Algorithms", desc:"O(n), O(log n), O(n²). Implement Merge Sort, Quick Sort, Binary Search. Analyze time/space complexity.", tags:["learn","practice"], trick:"Draw time-complexity graphs. Visual memory is 3× stronger. Every interview opens with Big O.", hours:"5h" },
          { title:"Trees: Binary Trees, BST, DFS, BFS", desc:"Implement BST, in-order/pre-order/post-order traversal, BFS with queue. Solve 5 LeetCode tree problems.", tags:["learn","practice"], trick:"LeetCode: Maximum Depth, Symmetric Tree, Binary Tree Level Order Traversal, Path Sum.", hours:"5h" },
          { title:"Graphs: DFS, BFS, Topological Sort", desc:"Adjacency list/matrix, DFS/BFS traversal, cycle detection, topological sort for DAGs.", tags:["learn","practice"], trick:"Real interview Q: 'Design a course scheduler' — that's topological sort. Visual graph drawing helps.", hours:"5h" },
          { title:"Dynamic Programming: Top-Down & Bottom-Up", desc:"Memoization vs tabulation. Fibonacci, Knapsack, Longest Common Subsequence, Coin Change.", tags:["learn","practice"], trick:"DP is hardest topic. Use the template: state → transition → base case. Draw the table.", hours:"5h" },
          { title:"Mock Technical Interview + Review", desc:"2 hours of LeetCode (1 medium, 1 hard). Record yourself explaining solutions aloud. Review week.", tags:["practice","review"], trick:"Talk through your approach BEFORE coding — interviewers care more about your thought process.", hours:"4h" },
        ]
      },
    ]
  },
  {
    id: 2, label: "Phase 2", title: "Cloud Engineering & DevOps",
    weeks: "7–11", duration: "5 weeks",
    color: "#00d4ff", emoji: "☁️",
    desc: "Master AWS, Docker, Kubernetes, Terraform CI/CD. The backbone of every modern tech company.",
    chips: [
      {text:"AWS",color:"#fcd34d"},{text:"Docker",color:"#67e8f9"},
      {text:"Kubernetes",color:"#a5b4fc"},{text:"Terraform",color:"#86efac"},
      {text:"CI/CD",color:"#d8b4fe"}
    ],
    weeks_data: [
      {
        num: 7, title: "AWS Core: EC2, S3, IAM, VPC, Lambda",
        subtitle: "AWS is in 80% of job descriptions. Master the fundamentals first.",
        days: [
          { title:"AWS Account Setup + IAM: Identity & Access Management", desc:"Create free tier account. IAM users, groups, policies, roles. MFA setup. Principle of least privilege.", tags:["build","learn"], trick:"Use AWS free tier for everything. NEVER store credentials in code — use IAM roles.", hours:"4h" },
          { title:"EC2 & Networking: Virtual Machines in the Cloud", desc:"Launch EC2 instance, SSH in, install software, security groups, elastic IPs. VPC, subnets, routing.", tags:["build","learn"], trick:"Launch a t2.micro, host your FastAPI app on it. Real cloud deployment!", hours:"6h" },
          { title:"S3: Object Storage for Everything", desc:"Buckets, versioning, lifecycle policies, static website hosting, pre-signed URLs. Use boto3 in Python.", tags:["build","learn"], trick:"S3 is used in EVERY AWS architecture. Build automation: Python script to backup files to S3.", hours:"5h" },
          { title:"Lambda + API Gateway: Serverless Architecture", desc:"Write Lambda functions, connect to API Gateway, create serverless REST endpoint. Triggers and events.", tags:["build","learn"], trick:"Serverless is the future. No servers = no maintenance. Build a URL shortener as Lambda.", hours:"6h" },
          { title:"RDS + DynamoDB: Managed Databases on AWS", desc:"Launch PostgreSQL on RDS. Create DynamoDB table. Connect applications. Backup and restore.", tags:["build","learn"], trick:"Never run DB on EC2 in prod. Always use managed RDS. This is what interviewers check for.", hours:"3h" },
        ]
      },
      {
        num: 8, title: "Docker: Containerization Mastery",
        subtitle: "Docker is the #1 most-listed cloud skill after AWS. Every company uses containers.",
        days: [
          { title:"Docker Core: Images, Containers, Volumes, Networks", desc:"docker run, build, ps, stop, rm. Dockerfile anatomy. Volumes for persistence. Networks for service communication.", tags:["learn","build"], trick:"Mental model: Image = recipe, Container = running dish. Never forget this analogy.", hours:"5h" },
          { title:"Write Optimized Dockerfiles for Python & Node apps", desc:"Multi-stage builds, .dockerignore, layer caching, non-root user, health checks. Minimize image size.", tags:["build","practice"], trick:"Profile image size before/after optimization. Goal: go from 1GB to under 100MB. Real skill.", hours:"5h" },
          { title:"Docker Compose: Multi-Container Applications", desc:"docker-compose.yml for: web app + PostgreSQL + Redis + Nginx. Environment variables, depends_on.", tags:["build","learn"], trick:"This skill alone is asked in 70% of backend interviews. Build the full 4-service compose file.", hours:"6h" },
          { title:"Docker + CI/CD: Build and Push to Docker Hub/ECR", desc:"Automate Docker build → push → deploy with GitHub Actions. Tag images with commit SHA.", tags:["deploy","build"], trick:"From push to live in 5 minutes automatically. This is DevOps. Show this in interviews.", hours:"6h" },
          { title:"Docker Project: Containerize Your Portfolio API", desc:"Put your FastAPI app + PostgreSQL in Docker Compose. Push to Docker Hub. Document everything.", tags:["project","deploy"], trick:"GitHub repo with docker-compose.yml and a one-command startup = serious developer signal.", hours:"3h" },
        ]
      },
      {
        num: 9, title: "Kubernetes: Container Orchestration",
        subtitle: "Kubernetes is the most in-demand DevOps skill. $150K+ roles require it.",
        days: [
          { title:"K8s Core Concepts: Pods, Deployments, Services, Ingress", desc:"minikube setup. kubectl commands. Pod lifecycle, Deployments with replicas, ClusterIP/NodePort/LoadBalancer.", tags:["learn","build"], trick:"Draw the K8s architecture: Node → Pod → Container. Visualize it. Feynman it out.", hours:"5h" },
          { title:"K8s Config: ConfigMaps, Secrets, Namespaces, RBAC", desc:"Store config and secrets properly. Namespace isolation. Role-based access. Never hardcode secrets!", tags:["learn","build"], trick:"Security red flag: secrets in env vars in YAML without proper K8s Secrets. Show you know better.", hours:"5h" },
          { title:"K8s Scaling: HPA, Resource Limits, Health Probes", desc:"Horizontal Pod Autoscaler, liveness/readiness probes, resource requests/limits, rolling updates.", tags:["learn","build"], trick:"HPA is how Netflix serves 200M users. Simulate load with k6 or hey and watch pods scale.", hours:"6h" },
          { title:"Helm: Kubernetes Package Manager", desc:"Install Helm, use a chart (nginx-ingress), write your own chart for your app. Values, templates.", tags:["build","learn"], trick:"Helm is how teams manage K8s configs. Knowing Helm = senior-level signal.", hours:"6h" },
          { title:"K8s Project: Deploy Full Stack App to K8s", desc:"Deploy: FastAPI + PostgreSQL + React on minikube then EKS (AWS). Full Ingress + TLS.", tags:["project","deploy"], trick:"EKS deployment is expensive but a 1-hour demo is free. Do it, screenshot it, delete cluster.", hours:"3h" },
        ]
      },
      {
        num: 10, title: "Terraform & Infrastructure as Code",
        subtitle: "IaC is how mature teams manage cloud. Terraform is the industry standard.",
        days: [
          { title:"Terraform Fundamentals: Providers, Resources, State", desc:"Install Terraform. Write first config to create AWS S3 bucket and EC2. terraform init/plan/apply/destroy.", tags:["learn","build"], trick:"State file = source of truth. NEVER delete terraform.tfstate. Commit it (encrypted) to git.", hours:"5h" },
          { title:"Terraform Modules & Remote State", desc:"Create reusable modules for VPC, EC2, RDS. Store state in S3 with DynamoDB locking.", tags:["build","learn"], trick:"Modules are the functions of infrastructure. One module = one VPC. Reuse across environments.", hours:"6h" },
          { title:"Terraform + CI/CD: Automated Infrastructure", desc:"GitHub Actions pipeline: terraform fmt → validate → plan (on PR) → apply (on merge to main).", tags:["build","deploy"], trick:"This is GitOps. Infrastructure as PR reviews. Very impressive to show interviewers.", hours:"6h" },
          { title:"Ansible: Configuration Management", desc:"Install Ansible. Playbooks to configure EC2 servers (install packages, set up users, deploy app).", tags:["learn","build"], trick:"Terraform builds the server, Ansible configures it. Often these two are used together.", hours:"5h" },
          { title:"IaC Project: Full AWS Infrastructure as Code", desc:"Terraform: VPC + EC2 + RDS + S3 + CloudFront + IAM. One terraform apply = complete production env.", tags:["project","deploy"], trick:"This repo on GitHub shows senior-level infrastructure thinking. Recruiters at AWS love this.", hours:"3h" },
        ]
      },
      {
        num: 11, title: "Observability: Monitoring, Logging, Alerting",
        subtitle: "You can't manage what you can't measure. Production systems need full observability.",
        days: [
          { title:"Prometheus + Grafana: Metrics & Dashboards", desc:"Deploy Prometheus stack with Helm. Instrument Python app with prometheus_client. Build Grafana dashboard.", tags:["build","learn"], trick:"Grafana dashboard = screenshot for portfolio. 'I built a monitoring system' is elite level story.", hours:"5h" },
          { title:"ELK Stack: Elasticsearch, Logstash, Kibana", desc:"Ship application logs to ELK. Create Kibana dashboards. Log structured JSON from FastAPI.", tags:["build","learn"], trick:"Structured logs (JSON) vs unstructured (print statements). Always use structured in production.", hours:"5h" },
          { title:"Distributed Tracing: Jaeger / OpenTelemetry", desc:"Instrument your app with OpenTelemetry. Trace requests across microservices. Identify bottlenecks.", tags:["build","learn"], trick:"This is what separates junior devs from senior. 'How would you debug latency?' → tracing.", hours:"5h" },
          { title:"SRE Concepts: SLI, SLO, SLA, Error Budgets", desc:"Define SLIs/SLOs for your app (99.9% uptime, <200ms P99). Alerting rules in Prometheus.", tags:["learn"], trick:"Google's SRE book is free online. Chapter 4 alone is interview gold. Read it.", hours:"5h" },
          { title:"Observability Project: Full Production-Ready Stack", desc:"Complete observability for your app: metrics + logs + traces + alerts. Document runbooks.", tags:["project","review"], trick:"Document a fake 'incident response'. Recruiters at PagerDuty and Datadog go wild for this.", hours:"4h" },
        ]
      },
    ]
  },
  {
    id: 3, label: "Phase 3", title: "AI & Machine Learning",
    weeks: "12–17", duration: "6 weeks",
    color: "#a855f7", emoji: "🤖",
    desc: "The highest-value skills of 2025. AI Engineers command $180K+. Build production AI systems.",
    chips: [
      {text:"PyTorch",color:"#d8b4fe"},{text:"LLMs",color:"#a5b4fc"},
      {text:"LangChain",color:"#86efac"},{text:"RAG",color:"#67e8f9"},
      {text:"MLOps",color:"#fcd34d"}
    ],
    weeks_data: [
      {
        num: 12, title: "Machine Learning Foundations",
        subtitle: "Before you use AI, understand the math and intuition behind it.",
        days: [
          { title:"NumPy & Pandas: Data Manipulation Mastery", desc:"Array operations, broadcasting, DataFrame operations, groupby, merge, pivot. Load and clean a real dataset.", tags:["learn","practice"], trick:"Kaggle has 1000s of free datasets. Pick something you care about. Data about cricket, movies, stocks.", hours:"5h" },
          { title:"Machine Learning Theory: Supervised vs Unsupervised", desc:"Linear regression, logistic regression, decision trees, k-means clustering. Math intuition only, no memorization.", tags:["learn"], trick:"Scikit-learn's diagrams are world-class. Use them as your cheatsheet. Bookmark the docs.", hours:"5h" },
          { title:"Scikit-learn: Build Your First ML Pipeline", desc:"Load dataset, preprocess (StandardScaler, OneHotEncoder), train model, evaluate (accuracy, F1, AUC).", tags:["build","learn"], trick:"Use Pipeline class. It prevents data leakage (common exam mistake and real bug).", hours:"5h" },
          { title:"Model Evaluation: Cross-Validation, Overfitting, Hyperparameter Tuning", desc:"K-fold CV, bias-variance tradeoff, GridSearchCV, RandomSearchCV, learning curves.", tags:["learn","practice"], trick:"Overfitting is THE most common ML bug. Always plot learning curves before shipping a model.", hours:"5h" },
          { title:"ML Project: End-to-End Churn Prediction Model", desc:"EDA → Feature Engineering → Model Training → Evaluation → Joblib serialization → Flask endpoint.", tags:["project","build"], trick:"Wrap in Flask/FastAPI and deploy to cloud. 'Live ML API' on resume > academic project.", hours:"4h" },
        ]
      },
      {
        num: 13, title: "Deep Learning: Neural Networks & PyTorch",
        subtitle: "PyTorch powers most AI research and production at Facebook, Tesla, OpenAI.",
        days: [
          { title:"Neural Network Theory: Neurons, Layers, Backpropagation", desc:"Perceptron, activation functions (ReLU, sigmoid), forward pass, loss, gradient descent, backprop.", tags:["learn"], trick:"3Blue1Brown's Neural Network series on YouTube (4 videos, 1hr total). Best visual explanation ever.", hours:"4h" },
          { title:"PyTorch Core: Tensors, Autograd, Datasets, DataLoaders", desc:"Tensor operations, automatic differentiation, custom Dataset class, batching, transforms.", tags:["learn","build"], trick:"PyTorch tutorial on pytorch.org is exceptional. Always start from official docs.", hours:"6h" },
          { title:"Train Your First CNN: Image Classification", desc:"Build CNN to classify CIFAR-10 (or MNIST). Conv2d, MaxPool, BatchNorm, Dropout, training loop.", tags:["build","learn"], trick:"Use GPU (Colab free T4 GPU). Training on CPU for vision = 10× slower. Go to Colab now.", hours:"6h" },
          { title:"Transfer Learning: Use Pre-Trained Models", desc:"Load ResNet50 from torchvision. Freeze base layers. Fine-tune on custom dataset (5 classes of your choice).", tags:["build","learn"], trick:"This is how production vision AI works. No company trains from scratch. Transfer learning is Day 1.", hours:"6h" },
          { title:"PyTorch Project: Custom Image Classifier App", desc:"Finetune a model on your own dataset. Build a FastAPI endpoint. Add a React UI to upload images.", tags:["project","deploy"], trick:"Working AI web app = top 1% of candidates applying for AI engineer roles. Deploy it.", hours:"3h" },
        ]
      },
      {
        num: 14, title: "Large Language Models (LLMs): The Core Skill of 2025",
        subtitle: "LLMs are the center of the AI economy. Every company is building with them.",
        days: [
          { title:"Transformers Architecture: Attention Mechanism Deep Dive", desc:"Self-attention, multi-head attention, positional encoding, encoder-decoder. Read 'Attention Is All You Need' (key parts).", tags:["learn"], trick:"Jay Alammar's 'Illustrated Transformer' blog post is the best explanation. Read it twice.", hours:"5h" },
          { title:"HuggingFace Transformers: Load + Use Pre-Trained Models", desc:"Load BERT, GPT-2, LLAMA for text classification, summarization, generation. Tokenizers and pipelines.", tags:["build","learn"], trick:"huggingface.co/spaces — deploy a demo for free in 5 minutes. Show it in interviews instantly.", hours:"6h" },
          { title:"OpenAI API + Prompt Engineering Mastery", desc:"GPT-4o API. Few-shot prompting, chain-of-thought, structured outputs (JSON mode), system prompts.", tags:["build","learn"], trick:"Prompt engineering = write clear instructions. Best practice: roleplay + examples + constraints format.", hours:"5h" },
          { title:"LangChain: Orchestrate LLM Applications", desc:"Chains, agents, tools, memory, output parsers. Build a document Q&A chatbot with conversation history.", tags:["build","learn"], trick:"LangChain has weekly updates. Learn the core concepts, not every feature. Concepts > syntax.", hours:"6h" },
          { title:"Fine-Tuning LLMs: LoRA + QLoRA", desc:"Fine-tune a 7B model with QLoRA on Colab. Use a custom dataset. Understand PEFT concepts.", tags:["build","learn"], trick:"Fine-tuning with QLoRA makes 7B models run on 1 GPU. This alone is a $160K+ skill.", hours:"3h" },
        ]
      },
      {
        num: 15, title: "RAG Systems & Vector Databases",
        subtitle: "RAG is the #1 production AI pattern. 90% of enterprise AI uses some form of RAG.",
        days: [
          { title:"Embeddings: How Machines Understand Meaning", desc:"Word2Vec intuition, OpenAI text-embedding-3-small, cosine similarity. Build semantic search from scratch.", tags:["learn","build"], trick:"Demo: embed 100 sentences. Search by meaning, not keyword. Instantly understand what recruiters want.", hours:"5h" },
          { title:"Vector Databases: Pinecone, ChromaDB, Weaviate", desc:"Install ChromaDB locally. Store embeddings, query by similarity, filter metadata, manage collections.", tags:["build","learn"], trick:"Vector DB = long-term memory for AI. Without it, every chat starts fresh. Explain this in interviews.", hours:"6h" },
          { title:"Build a RAG Pipeline from Scratch", desc:"PDF loader → text splitter → embeddings → vector store → retrieval → generation. No framework, pure Python.", tags:["build","project"], trick:"Building RAG from scratch > using LangChain's RAG. You'll understand every failure mode.", hours:"6h" },
          { title:"Advanced RAG: Reranking, Hybrid Search, Evaluation", desc:"BM25 + semantic hybrid search, Cohere reranker, RAGAs evaluation framework for answer quality.", tags:["build","learn"], trick:"Production RAG fails silently. RAGAs metrics (faithfulness, relevance) catch this early.", hours:"5h" },
          { title:"RAG Project: Enterprise Document Assistant", desc:"Upload any PDF → ask questions → get cited answers. FastAPI + ChromaDB + OpenAI + React UI. Deploy.", tags:["project","deploy"], trick:"This app is exactly what startup AI engineers build on Day 1. Literally job-simulation.", hours:"3h" },
        ]
      },
      {
        num: 16, title: "AI Agents: Agentic AI & Autonomous Systems",
        subtitle: "AI Agents are the frontier of AI engineering. The highest-paying niche in 2025–2026.",
        days: [
          { title:"AI Agent Architecture: ReAct, Tool Use, Function Calling", desc:"ReAct pattern (Reason + Act). OpenAI function calling. LangChain agents with custom tools.", tags:["learn","build"], trick:"Build an agent that can: search the web, write to a file, call an API. 3 tools = real agent.", hours:"5h" },
          { title:"Multi-Agent Systems: CrewAI & AutoGen", desc:"Multiple AI agents collaborating. Manager/worker pattern. Task delegation, parallel execution.", tags:["build","learn"], trick:"Multi-agent systems are what companies like Cognition (Devin AI) are building. Learn the pattern.", hours:"6h" },
          { title:"Memory Systems: Short-term, Long-term, Episodic", desc:"In-context memory, vector DB memory, entity memory. Build a personal AI assistant with persistent memory.", tags:["build","learn"], trick:"Memory makes agents useful. Without memory: toy. With memory: product. This is the dividing line.", hours:"6h" },
          { title:"AI Agent Tools: Web Search, Code Execution, Browser Control", desc:"Integrate Tavily search, Python REPL tool, Playwright for web automation into an agent.", tags:["build","learn"], trick:"Playwright-powered agents can fill forms, scrape dynamic sites, test your own app. Super power.", hours:"5h" },
          { title:"Agent Project: AI Research Assistant", desc:"Agent that: plans, searches web, reads papers, synthesizes findings, writes structured report. Fully autonomous.", tags:["project","deploy"], trick:"Show this running live in an interview. No one else in the room will have built this.", hours:"3h" },
        ]
      },
      {
        num: 17, title: "MLOps: Taking AI to Production",
        subtitle: "Building AI is 20% of the job. Getting it to production reliably is the other 80%.",
        days: [
          { title:"MLflow: Experiment Tracking & Model Registry", desc:"Track runs (params, metrics, artifacts). Model versioning, staging, production transitions. Compare experiments.", tags:["build","learn"], trick:"MLflow is how data science teams collaborate. Every serious ML team uses it. Must-know.", hours:"5h" },
          { title:"Model Serving: BentoML, TorchServe, vLLM", desc:"Pack model as BentoService. Auto-generate Docker image. Serve PyTorch model via TorchServe with batching.", tags:["build","learn"], trick:"vLLM enables 10× faster LLM inference. Know how to set up a self-hosted LLM endpoint.", hours:"6h" },
          { title:"Model Monitoring: Drift Detection & Retraining", desc:"Feature drift, label drift, Evidently AI for monitoring. Set up automated alerts and retraining triggers.", tags:["build","learn"], trick:"Models degrade silently in production. Drift detection catches it before users notice.", hours:"5h" },
          { title:"Kubeflow / Vertex AI: End-to-End ML Pipelines", desc:"Build a pipeline: data ingestion → preprocessing → training → evaluation → deployment → monitoring.", tags:["build","learn"], trick:"Vertex AI on GCP is easiest managed MLOps. Use it for portfolio projects. GCP has free credits.", hours:"6h" },
          { title:"MLOps Project: Automated ML Pipeline", desc:"GitHub Actions → data pull → training → evaluation gate → BentoML push → K8s deploy → monitor.", tags:["project","deploy"], trick:"This is a senior ML engineer's full stack. This project alone justifies a $140K+ salary.", hours:"3h" },
        ]
      },
    ]
  },
  {
    id: 4, label: "Phase 4", title: "Data Engineering at Scale",
    weeks: "18–22", duration: "5 weeks",
    color: "#10b981", emoji: "⚙️",
    desc: "Build the pipelines that power AI. Data Engineers are the unsung heroes behind every AI system.",
    chips: [
      {text:"Apache Spark",color:"#86efac"},{text:"Kafka",color:"#6ee7b7"},
      {text:"Airflow",color:"#fcd34d"},{text:"dbt",color:"#67e8f9"},
      {text:"Snowflake",color:"#d8b4fe"}
    ],
    weeks_data: [
      {
        num: 18, title: "Apache Spark: Distributed Data Processing",
        subtitle: "Spark powers data processing at Netflix, Uber, Airbnb, and every Fortune 500.",
        days: [
          { title:"Spark Fundamentals: RDDs, DataFrames, Spark SQL", desc:"Install PySpark. Understand DAG execution, lazy evaluation, partitioning. Transform large CSV datasets.", tags:["learn","build"], trick:"Databricks Community Edition = free Spark cluster. Don't install locally. Use cloud.", hours:"5h" },
          { title:"Spark Streaming: Real-Time Data Processing", desc:"Structured Streaming. Read from Kafka, process events, output to Delta Lake. Watermarks and late data.", tags:["build","learn"], trick:"Spark Streaming + Kafka = the standard real-time architecture. This combo is in every senior DE JD.", hours:"6h" },
          { title:"Spark Optimization: Partitioning, Caching, Broadcasting", desc:"Partition tuning, broadcast joins, cache vs persist, shuffle optimization. Analyze Spark UI.", tags:["learn","practice"], trick:"Spark UI is your debugger. Learn to read stage DAGs and identify shuffle bottlenecks.", hours:"5h" },
          { title:"Delta Lake: ACID Transactions for Data Lakes", desc:"Time travel, MERGE (upsert), schema evolution, Z-ordering, data skipping. The lakehouse paradigm.", tags:["build","learn"], trick:"Delta Lake = Data Lake + Data Warehouse. The future of all data storage. Master it.", hours:"5h" },
          { title:"Spark Project: Netflix-Style Recommendation Pipeline", desc:"Movie ratings data → Spark ALS collaborative filtering → recommendations API. Batch + serving.", tags:["project","build"], trick:"ALS in Spark is how Netflix used to power recommendations. Real-world, real scale.", hours:"4h" },
        ]
      },
      {
        num: 19, title: "Apache Kafka: Event Streaming",
        subtitle: "Kafka is the real-time data backbone of LinkedIn, Uber, Airbnb, and Twitter.",
        days: [
          { title:"Kafka Architecture: Topics, Partitions, Consumer Groups", desc:"Brokers, producers, consumers, offsets. Deploy Kafka with Docker. Produce/consume messages in Python.", tags:["learn","build"], trick:"Kafka mental model: a distributed, fault-tolerant bulletin board. Publishers post, subscribers read.", hours:"5h" },
          { title:"Kafka Streams: Real-Time Stream Processing", desc:"KStream, KTable, joins, aggregations, windowing, exactly-once semantics.", tags:["build","learn"], trick:"Kafka Streams vs Spark Streaming: use Kafka Streams for pure Kafka pipelines, Spark for mixed.", hours:"6h" },
          { title:"Kafka Connect: Data Integration", desc:"Source connectors (PostgreSQL CDC), sink connectors (S3, Elasticsearch). Debezium for change data capture.", tags:["build","learn"], trick:"Debezium + Kafka = capture every DB change in real-time. This pattern is used at every bank.", hours:"5h" },
          { title:"Kafka Schema Registry + Avro", desc:"Enforce schemas with Schema Registry. Avro serialization for compact, fast messaging.", tags:["build","learn"], trick:"Without schema registry: chaos. With it: stability. Senior DE interview Q: 'How do you manage schema evolution?'", hours:"5h" },
          { title:"Kafka Project: Real-Time Fraud Detection Pipeline", desc:"Transaction events → Kafka → Spark Streaming → fraud model → alert to Redis → dashboard.", tags:["project","build"], trick:"Fraud detection pipeline is asked in 50% of Fintech DE interviews. You just built the answer.", hours:"4h" },
        ]
      },
      {
        num: 20, title: "Airflow & Workflow Orchestration",
        subtitle: "Airflow schedules and monitors every production data pipeline. It's the nerve center.",
        days: [
          { title:"Airflow Core: DAGs, Operators, Tasks, XComs", desc:"Install Airflow with Docker Compose. Write your first DAG. PythonOperator, BashOperator, schedule_interval.", tags:["learn","build"], trick:"Airflow is just a scheduler with a UI and dependency management. Think cron on steroids.", hours:"5h" },
          { title:"Airflow Advanced: TaskFlow API, Dynamic Tasks, Sensors", desc:"@task decorator, dynamic task generation, FileSensor, ExternalTaskSensor, SLA monitoring.", tags:["build","learn"], trick:"TaskFlow API (Airflow 2.x) is cleaner and more Pythonic. Always use it over classic operators.", hours:"5h" },
          { title:"Airflow + Data Quality: Great Expectations", desc:"Validate data with Great Expectations. Fail pipeline on quality issues. Email/Slack alerts.", tags:["build","learn"], trick:"Data quality failures cost money. 'Our pipeline has 99.9% data quality' = recruiter attention.", hours:"5h" },
          { title:"dbt: Data Build Tool for Analytics Engineering", desc:"dbt models, tests, documentation, sources, seeds, macros. Transform raw data to analytics-ready tables.", tags:["build","learn"], trick:"dbt = SQL + software engineering best practices. Every modern data team uses it.", hours:"6h" },
          { title:"Orchestration Project: E-Commerce Analytics Pipeline", desc:"Airflow: ingest → Spark: transform → dbt: model → Snowflake: warehouse → Metabase: dashboard.", tags:["project","deploy"], trick:"This is a full modern data stack. Show this and you're immediately a senior DE candidate.", hours:"4h" },
        ]
      },
      {
        num: 21, title: "Cloud Data Warehousing: Snowflake + BigQuery",
        subtitle: "Modern data warehouses handle petabytes. Learn the cloud-native query engines.",
        days: [
          { title:"Snowflake: Architecture, Virtual Warehouses, Time Travel", desc:"Create account (30-day trial). Load data. Understand Micro-partitioning, clustering, zero-copy cloning.", tags:["build","learn"], trick:"Snowflake separates compute from storage. Scale independently. This is its killer feature.", hours:"5h" },
          { title:"Snowflake Advanced: Streams, Tasks, Snowpark", desc:"Change data capture with Streams. Schedule with Tasks. Python in Snowpark for ML in the warehouse.", tags:["build","learn"], trick:"Snowpark = Python UDFs in Snowflake. No more data movement to train models. Huge cost win.", hours:"5h" },
          { title:"BigQuery: Google's Serverless Data Warehouse", desc:"GCP free tier. Load CSV to BigQuery. Partitioned tables, clustering, BI Engine, ML with BQML.", tags:["build","learn"], trick:"BigQuery is serverless. No clusters to manage. Pay-per-query. Perfect for startups and prototypes.", hours:"5h" },
          { title:"Data Modeling: Star Schema, Dimensional Modeling, OBT", desc:"Fact tables, dimension tables, slowly changing dimensions (SCD Type 1/2), one big table pattern.", tags:["learn","build"], trick:"Star schema is the lingua franca of data warehousing. Draw it on a whiteboard in any interview.", hours:"5h" },
          { title:"Warehouse Project: Business Intelligence Platform", desc:"Raw events → Snowflake staging → dbt models → star schema → Power BI / Looker dashboard.", tags:["project","deploy"], trick:"A live BI dashboard on your portfolio speaks louder than a resume bullet. Make it beautiful.", hours:"4h" },
        ]
      },
      {
        num: 22, title: "System Design: Designing at Scale",
        subtitle: "System design is the final boss of senior tech interviews. Master it completely.",
        days: [
          { title:"System Design Fundamentals: CAP, Load Balancing, Caching", desc:"CAP theorem, consistency models, load balancers, Redis caching patterns, CDNs, sharding strategies.", tags:["learn"], trick:"Grokking System Design (paid) or System Design Primer (GitHub, free). 2 hours minimum today.", hours:"5h" },
          { title:"Design Twitter/X: Real-Time Social Media at Scale", desc:"Feed generation (fan-out on write vs read), tweet storage, timeline service, notification system.", tags:["learn","practice"], trick:"In the interview: start with requirements → estimate scale → define APIs → component diagram → deep dive.", hours:"5h" },
          { title:"Design a URL Shortener + Design Netflix CDN", desc:"URL shortener: hashing, redirect, analytics. Netflix: CDN, adaptive bitrate, regional caching.", tags:["learn","practice"], trick:"URL shortener is the most common system design warm-up question. Practice 3 times by heart.", hours:"5h" },
          { title:"Design a Ride-Sharing System (Uber/Lyft)", desc:"Location streaming, matching algorithm, surge pricing, payment, notifications, trip management.", tags:["learn","practice"], trick:"This involves geospatial indexing (Geohash/QuadTree). Learn these — they appear in many rounds.", hours:"5h" },
          { title:"Mock System Design Interview", desc:"Record yourself designing 'Design a distributed message queue like Kafka' in 45 minutes.", tags:["practice","review"], trick:"Timing is everything. Whiteboard structure: Req → Scale → APIs → Design → Trade-offs → Q&A.", hours:"4h" },
        ]
      },
    ]
  },
  {
    id: 5, label: "Phase 5", title: "Portfolio & Job Ready",
    weeks: "23–26", duration: "4 weeks",
    color: "#f59e0b", emoji: "🚀",
    desc: "Polish your brand, build showcase projects, optimize resume for ATS, and launch the job hunt.",
    chips: [
      {text:"GitHub Portfolio",color:"#fcd34d"},{text:"Resume ATS",color:"#86efac"},
      {text:"LinkedIn",color:"#67e8f9"},{text:"Networking",color:"#d8b4fe"},
      {text:"Interview Prep",color:"#fca5a5"}
    ],
    weeks_data: [
      {
        num: 23, title: "Capstone Project 1: AI-Powered SaaS Application",
        subtitle: "The crown jewel of your portfolio. A full-stack AI product that shows everything.",
        days: [
          { title:"Define & Architect Your Capstone SaaS Idea", desc:"Pick a real problem. Design the architecture: React + FastAPI + PostgreSQL + ChromaDB + AWS + CI/CD.", tags:["build","project"], trick:"Best capstone idea formula: [Industry] + AI = [time/cost saved]. Example: Legal doc scanner → saves 10hrs/contract.", hours:"6h" },
          { title:"Build the AI Core: RAG + Custom Agent", desc:"Build the LLM backbone. Retrieval pipeline. Custom tools. Memory system. Test edge cases.", tags:["build","project"], trick:"Test with adversarial inputs. 'What happens if user uploads a corrupted file?' — handle it.", hours:"6h" },
          { title:"Build the Full-Stack UI + API", desc:"React frontend with real-time streaming responses (SSE). FastAPI backend with auth, rate limiting, billing.", tags:["build","project"], trick:"Streaming responses (token-by-token like ChatGPT) are a WOW factor. Implement it.", hours:"6h" },
          { title:"Docker + AWS Deployment + Domain + HTTPS", desc:"Dockerize everything. Deploy on AWS ECS. Register domain. CloudFront + SSL. Set up monitoring.", tags:["deploy","project"], trick:"Custom domain ($12/yr) makes it look 100× more professional. Do it. techyourname.ai", hours:"6h" },
          { title:"Write Documentation + Record Demo Video", desc:"README with architecture diagram. API docs. 3-minute demo video (Loom). Deploy to Product Hunt.", tags:["project","review"], trick:"A demo video watched by a recruiter while reviewing your resume = automatic callback. Make it.", hours:"5h" },
        ]
      },
      {
        num: 24, title: "Capstone Project 2 + Resume & LinkedIn Optimization",
        subtitle: "One more elite project + perfect your professional brand for maximum recruiter impact.",
        days: [
          { title:"Capstone Project 2: Data Pipeline + BI Dashboard", desc:"Full DE pipeline: Kafka → Spark → Snowflake → dbt → Grafana/Metabase. Pick a public dataset.", tags:["build","project"], trick:"Real-time dashboard showing live metrics. Business people LOVE dashboards. Makes tech tangible.", hours:"6h" },
          { title:"Build Your ATS-Optimized Resume", desc:"Use STAR format bullets with numbers. Keyword-align to 5 target JDs. Quantify everything. One page.", tags:["build","review"], trick:"Rule: if it doesn't have a number (%, $, ×, hr saved), rewrite it. Weak: 'built API'. Strong: 'built API serving 50K daily requests'.", hours:"5h" },
          { title:"LinkedIn Profile: All-Star Optimization", desc:"Professional headshot, bannerimage, headlineformula, featured section (demo videos), skills endorsements.", tags:["build","review"], trick:"LinkedIn headline formula: [Title] | [Top Skill] | [Top Skill] | [Value Prop]. 120 people search you per week after.", hours:"5h" },
          { title:"GitHub Profile Optimization: README, Pinned Repos", desc:"GitHub profile README with animated banner. Pin 6 best repos. Each repo: README + demo GIF + live URL.", tags:["build","review"], trick:"Animated GIF of your app working = 5× more clicks than text. Use ScreenToGif (free) to record.", hours:"4h" },
          { title:"Build a Personal Tech Blog (Dev.to / Hashnode)", desc:"Write 3 technical articles about things you built. 'How I built X with Y'. Publish and share.", tags:["build","review"], trick:"Writing about your projects = free, permanent, searchable social proof. Recruiters Google you.", hours:"4h" },
        ]
      },
      {
        num: 25, title: "Interview Preparation & Behavioral Mastery",
        subtitle: "Technical skills get you the interview. Behavioral skills get you the offer.",
        days: [
          { title:"LeetCode Grind: Top 75 List — Easy & Medium", desc:"60 LeetCode problems from Blind 75 list. 4 problems/session. Timer on. 45 min per problem max.", tags:["practice"], trick:"Blind 75 list covers 90% of interview patterns. neetcode.io has solutions + explanations. Use it.", hours:"6h" },
          { title:"Behavioral Interview: STAR Stories for Top 20 Questions", desc:"Write STAR answers for: leadership, conflict, failure, success, ambiguity, influence without authority.", tags:["practice","review"], trick:"Record yourself answering 5 times. Energy on camera = confidence. Monotone = rejected.", hours:"5h" },
          { title:"Mock Technical Interview × 2 (Find a Partner or Pramp)", desc:"Use Pramp.com (free). 2 full 45-minute mock interviews. Feedback on problem-solving AND communication.", tags:["practice"], trick:"Pramp pairs you with a peer who also needs practice. Free. Effective. Do 3 sessions this week.", hours:"5h" },
          { title:"Salary Negotiation Mastery", desc:"Research salaries (levels.fyi, Glassdoor, LinkedIn). Practice negotiation script. Counter-offer strategies.", tags:["learn","practice"], trick:"Never say a number first. Always say 'I want to make sure we're aligned on range'. Gets you +$15K on average.", hours:"4h" },
          { title:"Job Application Blitz: 20 Targeted Applications", desc:"Apply to 20 jobs. Tailored resume per company. Personalized cover note (3 sentences). Track in Airtable.", tags:["practice","review"], trick:"Quality × 20 beats quantity × 200. Spend 30 min per application customizing. Response rate 5× higher.", hours:"5h" },
        ]
      },
      {
        num: 26, title: "Networking & The Job Search Engine",
        subtitle: "80% of jobs are filled through referrals. Build your network systematically.",
        days: [
          { title:"Cold Outreach: LinkedIn DM Strategy at Scale", desc:"Message 10 engineers at target companies per day. Template: compliment work → specific question → coffee chat ask.", tags:["practice"], trick:"Template: 'Hi [name], your [specific project/article] on [topic] was insightful. I'm transitioning into [role]. Would you share your experience?'", hours:"4h" },
          { title:"Tech Community: Discord, Twitter/X, Hackathons", desc:"Join 5 tech Discord communities. Post your projects on Twitter. Register for 1 hackathon.", tags:["build"], trick:"Hackathon wins = automatic recruiter bait. Even participating shows drive. 48 hours of hustle = 6 months of signaling.", hours:"4h" },
          { title:"Open Source Contributions: Start Contributing", desc:"Find a beginner-friendly issue on GitHub (good-first-issue label). Fix a bug or add docs. Submit a PR.", tags:["build","project"], trick:"A merged PR to a famous repo (LangChain, FastAPI, Airflow) = name-drop in every interview.", hours:"5h" },
          { title:"Recruiting Agencies + Tech Events", desc:"Register with 3 recruiting agencies (TEKsystems, Robert Half, Toptal). Attend a local tech meetup.", tags:["practice"], trick:"Recruiters at agencies work FOR you. They have JDs not on job boards. Worth 2 hours.", hours:"4h" },
          { title:"Review + Reflect + Plan Next Phase", desc:"Review all projects. Update portfolio. Set interview targets for Month 7+. Celebrate wins (seriously).", tags:["review"], trick:"Track: applications sent, callbacks, interviews, offers. Data-driven job search wins.", hours:"3h" },
        ]
      },
    ]
  },
  {
    id: 6, label: "Phase 6", title: "Specialization & Mastery",
    weeks: "27–36", duration: "10 weeks",
    color: "#ef4444", emoji: "🏆",
    desc: "Go deep on your chosen specialty. Get certified. Contribute to open source. Land the $120K–$200K+ role.",
    chips: [
      {text:"AWS Cert",color:"#fcd34d"},{text:"System Design",color:"#a5b4fc"},
      {text:"Open Source",color:"#86efac"},{text:"Specialization",color:"#d8b4fe"},
      {text:"Senior Path",color:"#fca5a5"}
    ],
    weeks_data: [
      {
        num: 27, title: "AWS Certifications: Solutions Architect Associate",
        subtitle: "AWS SAA-C03 is the #1 most-cited cert in cloud job descriptions. Pass it this week.",
        days: [
          { title:"AWS SAA Exam Guide: Domains & Weightings", desc:"Map exam domains: Resilient Architectures (26%), High-Performing (24%), Security (30%), Cost-Optimized (20%).", tags:["learn","review"], trick:"Stephane Maarek's Udemy course (SAA-C03) is used by 1M+ students. 68 hours, covers everything.", hours:"6h" },
          { title:"Practice Exams: 300+ questions with explanations", desc:"Jon Bonso's practice tests (6 full exams × 65 questions). Review every wrong answer. Build weakness list.", tags:["practice"], trick:"Target: 85%+ average on practice tests before sitting exam. This is the benchmark.", hours:"6h" },
          { title:"Hands-on Labs: Build the Reference Architectures", desc:"Build every reference architecture from the exam: VPC with NAT, HA with ASG+ALB, serverless, multi-region.", tags:["build","learn"], trick:"Touching the services is 3× faster learning than reading about them. Spend half the day in AWS console.", hours:"6h" },
          { title:"Book the Exam + Final Review", desc:"Schedule at Pearson VUE. Final review of weak areas. 2 hours of practice test. Rest and sleep well.", tags:["review","practice"], trick:"$150 exam fee. If you've done the work, you pass. Success rate with Maarek course: 90%+.", hours:"5h" },
          { title:"Attempt Exam / Pre-Work for Advanced Cloud", desc:"Sit the SAA exam (or final prep). If passed — celebrate. Start reading for Data Analytics Specialty.", tags:["practice","review"], trick:"Post your cert on LinkedIn the minute you pass. Instant recruiter messages flood in.", hours:"3h" },
        ]
      },
      {
        num: 28, title: "Advanced Python: Async, Performance, Architecture",
        subtitle: "Senior engineers write Production-grade Python. Go beyond syntax to architecture.",
        days: [
          { title:"Async Python: asyncio, aiohttp, Concurrent Futures", desc:"Event loops, coroutines, Tasks, gather, aiohttp for async HTTP. Benchmark vs synchronous.", tags:["learn","build"], trick:"Async Python can handle 1000 concurrent connections vs 10 synchronous. Know when to use each.", hours:"5h" },
          { title:"Python Performance: Profiling + Optimization", desc:"cProfile, line_profiler, memory_profiler. Optimize a slow function 10× using profiling insights.", tags:["learn","practice"], trick:"'Make it work, make it right, make it fast' — Donald Knuth. Profile BEFORE you optimize.", hours:"5h" },
          { title:"Python Architecture: Clean Architecture, SOLID Principles", desc:"Dependency injection, repository pattern, service layer, domain objects. Implement for your FastAPI app.", tags:["learn","build"], trick:"Clean Architecture makes code testable and maintainable. Senior interview: 'How do you structure a large Python project?'", hours:"5h" },
          { title:"Python Packaging: Build and Publish Your Own Library", desc:"pyproject.toml, build, twine. Publish a utility package to PyPI. Set up CI for automated releases.", tags:["build","deploy"], trick:"A package you published on PyPI (even 50 downloads) = senior-level curiosity signal.", hours:"5h" },
          { title:"Advanced Testing: Property-Based Testing + Load Testing", desc:"Hypothesis library (property-based), Locust for load testing. Test your API under 10,000 concurrent users.", tags:["build","practice"], trick:"Locust load test shows your API's breaking point. If you know it, you can fix it. No surprises in prod.", hours:"4h" },
        ]
      },
      {
        num: 29, title: "Security Engineering: DevSecOps & Threat Modeling",
        subtitle: "Security is now everyone's job. Security-aware engineers earn 20% more.",
        days: [
          { title:"OWASP Top 10: Web Application Security Essentials", desc:"SQL injection, XSS, IDOR, SSRF, broken auth. Exploit each in a lab environment (WebGoat, DVWA).", tags:["learn","practice"], trick:"Understanding attacks makes you better at defense. Practice breaking things safely.", hours:"5h" },
          { title:"Secrets Management: Vault, AWS Secrets Manager", desc:"Never hardcode secrets. Use Vault or AWS Secrets Manager. Rotate secrets automatically.", tags:["build","learn"], trick:"Assume your code will be leaked. If secrets are in env vars: bad. If they're in Vault: safe.", hours:"5h" },
          { title:"Container Security: Image Scanning, Runtime Security", desc:"Trivy for image scanning. Falco for runtime anomaly detection. OPA Gatekeeper for K8s policies.", tags:["build","learn"], trick:"Trivy scans Docker images for CVEs in seconds. Add it to your CI pipeline. 30 min setup.", hours:"5h" },
          { title:"Compliance as Code: CIS Benchmarks, SAST, DAST", desc:"Checkov/tfsec for IaC scanning. SonarQube for SAST. OWASP ZAP for DAST automation.", tags:["build","learn"], trick:"'Shift left security' = find bugs during development not production. This phrase impresses interviewers.", hours:"5h" },
          { title:"Security Project: Secure Your Capstone App", desc:"Full security audit: SAST + DAST + container scan + secret management + WAF + security headers.", tags:["project","review"], trick:"Add a 'Security' section to your README. 'Application secured against OWASP Top 10' = rare resume flex.", hours:"4h" },
        ]
      },
      {
        num: 30, title: "Go Language: The Cloud-Native Language",
        subtitle: "Go powers Kubernetes, Docker, Terraform, and most cloud-native tools. Learn it.",
        days: [
          { title:"Go Fundamentals: Syntax, Goroutines, Channels", desc:"Go tour (tour.golang.org). Goroutines, channels, select statement, WaitGroups. Concurrency model.", tags:["learn","build"], trick:"Go's concurrency model (goroutines) is simpler than Python's threading. Mental model: goroutine = lightweight thread.", hours:"5h" },
          { title:"Go Web: net/http, Gin Framework, REST API", desc:"Build REST API with Gin. Middleware, authentication, routing, request validation. Benchmark vs Python.", tags:["build","learn"], trick:"Go API handles 5× more RPS than Python for the same hardware. Benchmark and show the numbers.", hours:"5h" },
          { title:"Go + gRPC: High-Performance Microservices", desc:"Protocol Buffers, gRPC service definition, client/server, streaming. Build a gRPC service.", tags:["build","learn"], trick:"gRPC is used between microservices at Google/Netflix. Go + gRPC = the canonical microservice pattern.", hours:"5h" },
          { title:"Go CLI Tools: Build Production CLIs with Cobra", desc:"Build a CLI tool with Cobra. Subcommands, flags, config files, colored output. Publish to GitHub.", tags:["build","project"], trick:"Many DevOps tools start as CLIs. kubectl, terraform, git — all CLIs. Build one, learn the pattern.", hours:"5h" },
          { title:"Go Project: Build a Load Balancer from Scratch", desc:"Round-robin, least-connections, health checking, connection pooling. ~500 lines of idiomatic Go.", tags:["project","build"], trick:"This demonstrates deep systems understanding. 'I built a load balancer' is a conversation stopper.", hours:"4h" },
        ]
      },
      {
        num: 31, title: "Advanced System Design + Distributed Systems",
        subtitle: "The final level. Staff/Principal and Architect roles live here.",
        days: [
          { title:"Distributed Consensus: Raft, Paxos, Leader Election", desc:"Understand Raft consensus algorithm. etcd (used in Kubernetes). Leader election patterns.", tags:["learn"], trick:"Read the Raft paper (students.raft.github.io). The animated visualization clarifies everything.", hours:"5h" },
          { title:"Event-Driven Architecture: CQRS + Event Sourcing", desc:"Command/Query Responsibility Segregation. Event sourcing (Axon, EventStoreDB). Eventual consistency.", tags:["learn","build"], trick:"CQRS + Event Sourcing powers Shopify's checkout. Knowing it = Staff-level signal.", hours:"5h" },
          { title:"Design Google Drive + Design WhatsApp", desc:"File storage, chunking, collaboration, conflict resolution. Messaging: delivery, read receipts, E2E encryption.", tags:["practice","learn"], trick:"These two cover: blob storage, WebSocket, message queues, consistency. Max coverage for one session.", hours:"5h" },
          { title:"Design a Global Rate Limiter + Distributed Cache", desc:"Token bucket, sliding window. Redis Cluster, consistent hashing, cache eviction policies.", tags:["practice","learn"], trick:"Rate limiter design is asked at Stripe, Cloudflare, AWS. Cache design at every senior distributed systems round.", hours:"5h" },
          { title:"Mock Staff-Level Design Interview + Full Review", desc:"Mock: Design a global-scale data platform (warehouse + real-time + AI). Record and review.", tags:["practice","review"], trick:"Staff engineers talk about trade-offs, not just solutions. Practice ending: 'If I had 6 months, I'd also add...'", hours:"4h" },
        ]
      },
      {
        num: 32, title: "Open Source + Community + Advanced Specialization",
        subtitle: "The final acceleration. Build your network, your reputation, and your expertise.",
        days: [
          { title:"Choose Your Specialization Track: AI Engineer / Data Engineer / Cloud Architect", desc:"Review job market data. Choose your primary track. Set 3 target companies. Plan next 6 months.", tags:["review","learn"], trick:"T-shaped skills: be deep in 1 (primary), competent in 3 (secondary). Recruiters hire for depth.", hours:"4h" },
          { title:"Open Source: Contribute to a Top Python/AI Project", desc:"Pick LangChain, FastAPI, Airflow, or PyTorch. Find an issue. Fix it. Submit quality PR.", tags:["build","project"], trick:"PR merged to a top-100 GitHub repo = conversation starter in every interview for 2 years.", hours:"6h" },
          { title:"Technical Writing: Publish Deep-Dive Article", desc:"Write a 2,000+ word technical article. 'How I built [X] with [Y]. Performance, trade-offs, learnings.'", tags:["build","review"], trick:"Medium algorithm rewards articles with time-on-page. Diagrams + code = people stay, read, follow.", hours:"5h" },
          { title:"Conference Talk Proposal + Community Teaching", desc:"Submit a talk proposal to PyData, KubeCon, AI Summit, or local meetup. Write the abstract.", tags:["build"], trick:"Speaking at a conference = 1000 LinkedIn followers in a week. Submit 5 conferences simultaneously.", hours:"4h" },
          { title:"Final Review: Build Your Personal Brand OS", desc:"Audit everything: GitHub, LinkedIn, portfolio, resume, blog. Update all with new skills. Plan Month 9+.", tags:["review"], trick:"Google yourself. What do you find? By now: GitHub projects, LinkedIn, articles, maybe a GitHub star. That's your brand.", hours:"5h" },
        ]
      },
    ]
  },
];
