import Content from "@/components/components-service-page/content";
import DefaultSectionContainer from "@/components/ui/default-section-container";
import SectionContent from "@/components/ui/section-content";
import data from "@/components/workSection/data.json";

export default async function WorkSection({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sectionData = data.works.find((item) => item.slug === slug);

  if (!sectionData) return;

  return (
    <DefaultSectionContainer
      id="perguntas-frequentes"
      className="bg-background my-0 min-h-screen"
    >
      <SectionContent className="h-full">
        <Content data={sectionData} />
      </SectionContent>
    </DefaultSectionContainer>
  );
}
