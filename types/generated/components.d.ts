import type { Schema, Attribute } from '@strapi/strapi';

export interface BlogPostsSelection extends Schema.Component {
  collectionName: 'components_blog_posts_selections';
  info: {
    displayName: 'posts_selection';
    icon: 'bell';
  };
  attributes: {
    headline: Attribute.String & Attribute.Required;
    featured_posts: Attribute.Relation<
      'blog.posts-selection',
      'oneToMany',
      'api::post.post'
    >;
    layout: Attribute.Enumeration<['featured', 'latest', 'tag']>;
  };
}

export interface LayoutHeroButtons extends Schema.Component {
  collectionName: 'components_layout_hero_buttons';
  info: {
    displayName: 'hero_buttons';
    icon: 'brush';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
    button_type: Attribute.Enumeration<['primary', 'secondary', 'general']>;
  };
}

export interface LayoutHeroFeaturedCourse extends Schema.Component {
  collectionName: 'components_layout_hero_featured_courses';
  info: {
    displayName: 'hero_featured_course';
    description: '';
  };
  attributes: {
    course: Attribute.Relation<
      'layout.hero-featured-course',
      'oneToOne',
      'api::course.course'
    >;
    heading: Attribute.String;
    announcement: Attribute.Text;
  };
}

export interface LayoutHeroSection extends Schema.Component {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'hero_section';
    icon: 'crown';
  };
  attributes: {
    head_line: Attribute.String & Attribute.Required;
    cover: Attribute.Media;
    buttons: Attribute.Component<'layout.hero-buttons', true>;
  };
}

export interface LayoutHeroServices extends Schema.Component {
  collectionName: 'components_layout_hero_services';
  info: {
    displayName: 'hero_services';
    icon: 'bulletList';
  };
  attributes: {
    services: Attribute.Relation<
      'layout.hero-services',
      'oneToMany',
      'api::service.service'
    >;
  };
}

export interface LayoutMission extends Schema.Component {
  collectionName: 'components_layout_missions';
  info: {
    displayName: 'mission';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    show_logo: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface LayoutNewsletter extends Schema.Component {
  collectionName: 'components_layout_newsletters';
  info: {
    displayName: 'newsletter';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Subscript to our newsletter'>;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'Stray up to date with our latest release '>;
  };
}

export interface LayoutPageInfo extends Schema.Component {
  collectionName: 'components_layout_page_infos';
  info: {
    displayName: 'page_info';
  };
  attributes: {
    content: Attribute.RichText;
    cover_image: Attribute.Media;
    seo_info: Attribute.Component<'seo.seo-information'>;
  };
}

export interface SeoSeoInformation extends Schema.Component {
  collectionName: 'components_seo_seo_informations';
  info: {
    displayName: 'seoInformation';
    icon: 'search';
  };
  attributes: {
    seoTitle: Attribute.String;
    seoDecription: Attribute.Text;
  };
}

export interface SociaSocialMedia extends Schema.Component {
  collectionName: 'components_socia_social_medias';
  info: {
    displayName: 'social_media';
  };
  attributes: {
    name: Attribute.Enumeration<
      ['linkedIn', 'facebook', 'youtube', 'github', 'whatsapp']
    > &
      Attribute.Required;
    link: Attribute.String & Attribute.Required & Attribute.Unique;
    logo: Attribute.Media;
    color: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blog.posts-selection': BlogPostsSelection;
      'layout.hero-buttons': LayoutHeroButtons;
      'layout.hero-featured-course': LayoutHeroFeaturedCourse;
      'layout.hero-section': LayoutHeroSection;
      'layout.hero-services': LayoutHeroServices;
      'layout.mission': LayoutMission;
      'layout.newsletter': LayoutNewsletter;
      'layout.page-info': LayoutPageInfo;
      'seo.seo-information': SeoSeoInformation;
      'socia.social-media': SociaSocialMedia;
    }
  }
}
