export interface ContentfulResources {
  fields: {
    title: string
    description: string
    contactItems: string
  }
}

export interface ContentfulSchedules {
  fields: {
    title: string
    days: string
    location: string
    pdfLink: string
    pdf: ContenfulAsset
  }
}

interface ContenfulAsset {
  fields: {
    description: string
    title: string
    file: ContenfulAssetFile
  }
}

interface ContenfulAssetFile {
  fileName: string
  url: string
}
