import { Entry } from "contentful";
import { NextSeo } from "next-seo";
import { lighten } from "polished";
import styled from "styled-components";
import { transportationCMS } from "../cms/transportationCMS";
import { Layout } from "../components/Layout";
import { SectionHeader } from "../components/SectionHeader";
import { DOCUMENTS_SEO } from "../seo/next-seo.config";
import { ContentfulDocuments } from "../types/Contentful";

interface DocumentsProps {
  documents: Entry<ContentfulDocuments>[];
}

const Documents: React.FC<DocumentsProps> = ({ documents }) => {
  return (
    <>
      <NextSeo {...DOCUMENTS_SEO} />
      <Layout>
        <SectionHeader title="Inventory of Documents">
          <DocumentsItems>
            {documents.map(({ fields: { document, title }, sys: { id } }) => (
              <DocumentsItem key={id}>
                <h4>
                  <a href={document.fields.file.url}>{title}</a>
                </h4>
              </DocumentsItem>
            ))}
          </DocumentsItems>
        </SectionHeader>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const res = await transportationCMS.getEntries<ContentfulDocuments>({
    content_type: "documents",
  });

  const documents = res.items;

  return {
    revalidate: 60 * 10,
    props: {
      documents,
    },
  };
}

const DocumentsItems = styled.ul``;

const DocumentsItem = styled.li`
  margin-bottom: 2rem;
  h4 {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 2px;
    a {
      color: ${(props) => props.theme.colors.colorText};
      text-decoration: underline;
      &:hover {
        color: ${(props) => lighten(0.25, props.theme.colors.colorText)};
      }
      transition: all 0.2s ease-in-out;
    }
  }
`;

export default Documents;
