export type Skill = {
  name: string;
  icon?: string;
  badge: string;
};

export type SkillCategory = {
  id: string;
  skills: Skill[];
};

// Devicon CSS class names are used where an official mark exists. The short
// monogram is an intentional fallback for newer or less common AI tools.
export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    skills: [
      { name: "Java", icon: "devicon-java-plain", badge: "Ja" },
      { name: "Spring Boot", icon: "devicon-spring-original", badge: "Sp" },
      { name: "Spring Security", icon: "devicon-spring-original", badge: "SS" },
      { name: "Hibernate", icon: "devicon-hibernate-plain", badge: "Hb" },
      { name: "Node.js", icon: "devicon-nodejs-plain", badge: "N" },
      { name: "Python", icon: "devicon-python-plain", badge: "Py" },
    ],
  },
  {
    id: "frontend",
    skills: [
      { name: "React", icon: "devicon-react-original", badge: "Re" },
      { name: "JavaScript", icon: "devicon-javascript-plain", badge: "JS" },
      { name: "HTML5", icon: "devicon-html5-plain", badge: "H5" },
      { name: "CSS3", icon: "devicon-css3-plain", badge: "C3" },
    ],
  },
  {
    id: "databases",
    skills: [
      { name: "MySQL", icon: "devicon-mysql-original", badge: "My" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain", badge: "Pg" },
      { name: "Supabase / pgvector", icon: "devicon-supabase-plain", badge: "Su" },
      { name: "Stored Procedures", icon: "devicon-mysql-plain", badge: "SP" },
    ],
  },
  {
    id: "ai",
    skills: [
      { name: "n8n", icon: "devicon-n8n-plain", badge: "n8n" },
      { name: "CrewAI", badge: "Cr" },
      { name: "OpenAI API", icon: "devicon-openai-plain", badge: "AI" },
      { name: "LLM Integration", badge: "LLM" },
      { name: "Prompt Engineering", badge: "Pr" },
      { name: "Agent Orchestration", badge: "Ag" },
    ],
  },
  {
    id: "infrastructure",
    skills: [
      { name: "Docker", icon: "devicon-docker-plain", badge: "Dk" },
      { name: "Coolify", badge: "Cf" },
      { name: "AWS", icon: "devicon-amazonwebservices-plain", badge: "AWS" },
      { name: "Terraform", icon: "devicon-terraform-plain", badge: "Tf" },
      { name: "Ansible", icon: "devicon-ansible-plain", badge: "An" },
      { name: "CI/CD (Jenkins)", icon: "devicon-jenkins-plain", badge: "CI" },
      { name: "Bash", icon: "devicon-bash-plain", badge: "B" },
      { name: "PowerShell", icon: "devicon-powershell-plain", badge: "PS" },
    ],
  },
  {
    id: "tools",
    skills: [
      { name: "Git / GitHub", icon: "devicon-github-original", badge: "GH" },
      { name: "Postman", icon: "devicon-postman-plain", badge: "Pm" },
      { name: "Docker", icon: "devicon-docker-plain", badge: "Dk" },
      { name: "Linux / Windows", icon: "devicon-linux-plain", badge: "OS" },
    ],
  },
];
