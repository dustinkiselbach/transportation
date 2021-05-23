import { NextSeoProps } from 'next-seo'
import { SITE_NAME } from '../constants/siteName'
import { SITE_URL } from '../constants/url'

export const DEFAULT_SEO: NextSeoProps = {
  title: SITE_NAME,
  //TODO get description
  description: 'Serving Madison County',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: SITE_URL,
    site_name: SITE_NAME
  }
}

export const CONTACT_SEO: NextSeoProps = {
  title: `${SITE_NAME} | Contact Us`
}

export const SERVICES_SEO: NextSeoProps = {
  title: `${SITE_NAME} | Services`
}

export const SCHEDULES_SEO: NextSeoProps = {
  title: `${SITE_NAME} | Schedules`
}

export const ANNOUNCEMENTS_SEO: NextSeoProps = {
  title: `${SITE_NAME} | Announcements`
}

export const VIDEOS_SEO: NextSeoProps = {
  title: `${SITE_NAME} | Videos`
}

export const DOCUMENTS_SEO: NextSeoProps = {
  title: `${SITE_NAME} | Documents`
}

export const TRAVEl_TRAINING_SEO: NextSeoProps = {
  title: `${SITE_NAME} | Travel Training`
}

export const TOKEN_SEO: NextSeoProps = {
  title: `${SITE_NAME} | Madison Transit Token Program`
}