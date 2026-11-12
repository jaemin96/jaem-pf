"use client";

import {
  Document,
  Page,
  Text,
  View,
  Link,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

// 한글 폰트 등록 - Pretendard (OTF)
Font.register({
  family: "Pretendard",
  fonts: [
    {
      src: "/fonts/Pretendard/public/static/Pretendard-Regular.otf",
      fontWeight: 400,
    },
    {
      src: "/fonts/Pretendard/public/static/Pretendard-Bold.otf",
      fontWeight: 700,
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: "#ffffff",
    fontFamily: "Pretendard",
  },
  header: {
    marginBottom: 30,
  },
  name: {
    fontSize: 28,
    fontWeight: 700,
    marginBottom: 4,
  },
  secondaryName: {
    fontSize: 12,
    color: "#666",
    marginBottom: 8,
  },
  role: {
    fontSize: 12,
    color: "#666",
    marginBottom: 8,
  },
  headline: {
    fontSize: 16,
    marginBottom: 12,
    color: "#333",
  },
  summary: {
    fontSize: 11,
    lineHeight: 1.6,
    color: "#555",
    marginBottom: 16,
  },
  links: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 8,
  },
  link: {
    fontSize: 10,
    color: "#0066cc",
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 16,
    paddingBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: "#333",
  },
  stackItem: {
    marginBottom: 12,
  },
  stackTitle: {
    fontSize: 13,
    fontWeight: 700,
    marginBottom: 4,
  },
  stackDesc: {
    fontSize: 10,
    color: "#555",
    marginBottom: 6,
    lineHeight: 1.5,
  },
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  tag: {
    fontSize: 9,
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
    color: "#333",
  },
  projectItem: {
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  projectHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  projectName: {
    fontSize: 14,
    fontWeight: 700,
  },
  projectPeriod: {
    fontSize: 10,
    color: "#666",
  },
  projectRole: {
    fontSize: 10,
    color: "#666",
    marginBottom: 6,
  },
  projectSummary: {
    fontSize: 10,
    lineHeight: 1.5,
    color: "#555",
    marginBottom: 8,
  },
  projectMeta: {
    fontSize: 9,
    color: "#999",
    marginTop: 4,
  },
  expItem: {
    marginBottom: 16,
  },
  expHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  expOrg: {
    fontSize: 14,
    fontWeight: 700,
  },
  expPeriod: {
    fontSize: 10,
    color: "#666",
  },
  expTitle: {
    fontSize: 11,
    color: "#666",
    marginBottom: 8,
  },
  bullet: {
    fontSize: 10,
    lineHeight: 1.6,
    color: "#555",
    marginBottom: 4,
    paddingLeft: 12,
  },
});

const extraStyles = StyleSheet.create({
  projectOutcome: {
    fontSize: 10.5,
    lineHeight: 1.5,
    color: "#222",
    marginBottom: 6,
  },
  projectLinks: {
    flexDirection: "row",
    gap: 12,
    marginTop: 4,
  },
  expHighlight: {
    fontSize: 10.5,
    lineHeight: 1.5,
    color: "#222",
    marginBottom: 6,
  },
});

interface PortfolioPDFProps {
  /** 섹션 제목 (shared/i18n 사전의 pdf 항목) */
  labels: { experience: string; projects: string; stacks: string };
  hero: {
    primaryName: string;
    secondaryName?: string;
    role: string;
    headline: string;
    summary: string;
    email: string;
    ctas: { label: string; href?: string }[];
  };
  stacks: {
    title: string;
    desc: string;
    tags: { name: string; variant?: string }[];
  }[];
  projects: {
    name: string;
    period: string;
    role: string;
    summary: string;
    outcome?: string;
    details?: string[];
    tags: string[];
    stack?: string[];
    meta: string;
    github?: string;
    demo?: string;
  }[];
  experiences: {
    org: string;
    period: string;
    title: string;
    highlight?: string;
    bullets: string[];
  }[];
}

export function PortfolioPDF({
  labels: t,
  hero,
  stacks,
  projects,
  experiences,
}: PortfolioPDFProps) {
  return (
    <Document title={`${hero.primaryName} — ${hero.role}`} author={hero.primaryName}>
      <Page size="A4" style={styles.page}>
        {/* Hero Section */}
        <View style={styles.header}>
          <Text style={styles.name}>{hero.primaryName}</Text>
          {hero.secondaryName && (
            <Text style={styles.secondaryName}>{hero.secondaryName}</Text>
          )}
          <Text style={styles.role}>{hero.role}</Text>
          <Text style={styles.headline}>{hero.headline}</Text>
          <Text style={styles.summary}>{hero.summary}</Text>
          <View style={styles.links}>
            <Link src={`mailto:${hero.email}`} style={styles.link}>
              Email: {hero.email}
            </Link>
            {hero.ctas.map((cta, i) => (
              <Link key={i} src={cta.href ?? ""} style={styles.link}>
                {cta.label}: {cta.href}
              </Link>
            ))}
          </View>
        </View>

        {/* Experience Section — 채용 담당자가 가장 먼저 보는 영역이라 맨 앞에 둔다 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.experience}</Text>
          {experiences.map((exp, i) => (
            <View key={i} style={styles.expItem} wrap={false}>
              <View style={styles.expHeader}>
                <Text style={styles.expOrg}>{exp.org}</Text>
                <Text style={styles.expPeriod}>{exp.period}</Text>
              </View>
              <Text style={styles.expTitle}>{exp.title}</Text>
              {exp.highlight && <Text style={extraStyles.expHighlight}>{exp.highlight}</Text>}
              {exp.bullets.map((bullet, j) => (
                <Text key={j} style={styles.bullet}>
                  • {bullet}
                </Text>
              ))}
            </View>
          ))}
        </View>

        {/* Projects Section */}
        <View style={styles.section} break>
          <Text style={styles.sectionTitle}>{t.projects}</Text>
          {projects.map((project, i) => (
            <View key={i} style={styles.projectItem} wrap={false}>
              <View style={styles.projectHeader}>
                <Text style={styles.projectName}>{project.name}</Text>
                <Text style={styles.projectPeriod}>{project.period}</Text>
              </View>
              <Text style={styles.projectRole}>
                {project.role} · {project.meta}
              </Text>
              {project.outcome && (
                <Text style={extraStyles.projectOutcome}>{project.outcome}</Text>
              )}
              <Text style={styles.projectSummary}>{project.summary}</Text>
              {project.details?.map((d, j) => (
                <Text key={j} style={styles.bullet}>
                  • {d}
                </Text>
              ))}
              <View style={[styles.tags, { marginTop: 6 }]}>
                {(project.stack ?? project.tags).map((tag, j) => (
                  <Text key={j} style={styles.tag}>
                    {tag}
                  </Text>
                ))}
              </View>
              {(project.github || project.demo) && (
                <View style={extraStyles.projectLinks}>
                  {project.github && (
                    <Link src={project.github} style={styles.link}>
                      GitHub: {project.github}
                    </Link>
                  )}
                  {project.demo && (
                    <Link src={project.demo} style={styles.link}>
                      Demo: {project.demo}
                    </Link>
                  )}
                </View>
              )}
            </View>
          ))}
        </View>

        {/* Stacks Section */}
        <View style={styles.section} break>
          <Text style={styles.sectionTitle}>{t.stacks}</Text>
          {stacks.map((stack, i) => (
            <View key={i} style={styles.stackItem} wrap={false}>
              <Text style={styles.stackTitle}>{stack.title}</Text>
              <Text style={styles.stackDesc}>{stack.desc}</Text>
              <View style={styles.tags}>
                {stack.tags.map((tag, j) => (
                  <Text key={j} style={styles.tag}>
                    {tag.name}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}
