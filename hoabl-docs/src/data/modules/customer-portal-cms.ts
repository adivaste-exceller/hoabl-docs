import type { Column, Entity, ModuleSchema } from '@/lib/erd/types';

const id = (): Column => ({ name: 'Id', type: 'Id', pk: true });
const lookup = (name: string, table: string, description?: string): Column => ({
  name,
  type: 'Lookup',
  fk: { table, column: 'Id' },
  description,
});
const masterDetail = (name: string, table: string, description?: string): Column => ({
  name,
  type: 'MasterDetail',
  fk: { table, column: 'Id' },
  description,
});
const col = (name: string, type: string, description?: string): Column => ({ name, type, description });

const config = (): Column => lookup('Customer_Portal_Config__c', 'Customer_Portal_Config__c');
const image = (): Column => lookup('Image__c', 'CUST_PORT_File__c');
const serial = (): Column => col('Serial_No__c', 'Number', 'Display order');

const entities: Entity[] = [
  // Configuration
  {
    name: 'Customer_Portal_Config__c',
    label: 'Portal Configuration',
    group: 'config',
    description: 'Singleton parent that owns every CMS record shown in the customer portal.',
    columns: [
      id(),
      col('Service_FAQ_Max_Visible_Items__c', 'Number'),
      lookup('TDS_Tutorial_Document__c', 'CUST_PORT_File__c'),
    ],
  },
  {
    name: 'CUST_PORT_File__c',
    label: 'File',
    group: 'config',
    description: 'Uploaded asset record. Every image or document in the CMS points here.',
    columns: [
      id(),
      config(),
      col('File_Name__c', 'Text(255)'),
      col('File_Size__c', 'Number'),
      col('File_Download_URL__c', 'Url'),
      col('File_Preview_URL__c', 'Url'),
      col('BlurHash__c', 'Text(255)', 'Placeholder hash shown while the image loads'),
    ],
  },

  // Login carousel
  {
    name: 'CUST_PORT_Login_Carousel_Image__c',
    label: 'Login Carousel Image',
    group: 'login',
    columns: [id(), config(), image(), col('Alternative_Text__c', 'Text(255)'), serial()],
  },

  // Home and offerings
  {
    name: 'CUST_PORT_Home_Carousel_Image__c',
    label: 'Home Carousel Image',
    group: 'offerings',
    columns: [id(), config(), image(), col('Alternative_Text__c', 'Text(255)'), serial()],
  },
  {
    name: 'CUST_PORT_Home_Latest_Offerings__c',
    label: 'Latest Offering',
    group: 'offerings',
    columns: [
      id(),
      config(),
      image(),
      lookup('Launch__c', 'Launch__c'),
      col('Title__c', 'Text(255)'),
      col('Description__c', 'LongText(1000)'),
      col('Redirect_URL__c', 'LongText(2000)'),
      col('Customer_Tier__c', 'Picklist', 'Unqualified, Family First, Family First Select, Family First Signature'),
      serial(),
    ],
  },

  // Investment and RERA
  {
    name: 'CUST_PORT_General_Launch_Info__c',
    label: 'General Launch Info',
    group: 'investment',
    columns: [
      id(),
      config(),
      image(),
      lookup('Launch__c', 'Launch__c'),
      lookup('Project__c', 'Project__c'),
      col('Alias__c', 'Text(255)'),
    ],
  },
  {
    name: 'CUST_PORT_Investment_Carousel_Image__c',
    label: 'Investment Carousel Image',
    group: 'investment',
    columns: [
      id(),
      config(),
      image(),
      lookup('Launch__c', 'Launch__c'),
      lookup('Project__c', 'Project__c'),
      col('Alternative_Text__c', 'Text(255)'),
      serial(),
    ],
  },
  {
    name: 'CUST_PORT_RERA_Detail__c',
    label: 'RERA Detail',
    group: 'investment',
    columns: [
      id(),
      config(),
      image(),
      lookup('Project__c', 'Project__c'),
      col('RERA_Registration_No__c', 'Text(255)'),
      col('Account_No__c', 'Text(255)'),
      col('URL__c', 'Text(255)'),
      serial(),
    ],
  },

  // Latest updates
  {
    name: 'CUST_PORT_Latest_Updates_Video__c',
    label: 'Latest Update Video',
    group: 'updates',
    columns: [
      id(),
      config(),
      lookup('Launch__c', 'Launch__c'),
      lookup('Phase__c', 'Phase__c'),
      lookup('YouTube_Channel_Logo__c', 'CUST_PORT_File__c'),
      lookup('YouTube_Thumbnail_Image__c', 'CUST_PORT_File__c'),
      col('YouTube_Channel_Name__c', 'Text(255)'),
      col('YouTube_Video_Title__c', 'Text(255)'),
      col('YouTube_Video_URL__c', 'Url'),
      col('YouTube_Video_Embed_URL__c', 'Formula(Text)'),
      col('YouTube_Video_Publish_Date__c', 'Date'),
      serial(),
    ],
  },
  {
    name: 'CUST_PORT_Latest_Updates_Newsletter__c',
    label: 'Latest Update Newsletter',
    group: 'updates',
    columns: [
      id(),
      config(),
      lookup('Document__c', 'CUST_PORT_File__c'),
      lookup('Launch__c', 'Launch__c'),
      lookup('Phase__c', 'Phase__c'),
      col('Publish_Date__c', 'Date'),
      serial(),
    ],
  },
  {
    name: 'CUST_PORT_Video_Targeting__c',
    label: 'Video Targeting',
    group: 'updates',
    description: 'Limits which customers see a video, by project, launch or phase.',
    columns: [
      id(),
      config(),
      masterDetail('Video__c', 'CUST_PORT_Latest_Updates_Video__c'),
      lookup('Project__c', 'Project__c'),
      lookup('Launch__c', 'Launch__c'),
      lookup('Phase__c', 'Phase__c'),
    ],
  },
  {
    name: 'CUST_PORT_Newsletter_Targeting__c',
    label: 'Newsletter Targeting',
    group: 'updates',
    description: 'Limits which customers see a newsletter, by project, launch or phase.',
    columns: [
      id(),
      config(),
      masterDetail('Newsletter__c', 'CUST_PORT_Latest_Updates_Newsletter__c'),
      lookup('Project__c', 'Project__c'),
      lookup('Launch__c', 'Launch__c'),
      lookup('Phase__c', 'Phase__c'),
    ],
  },

  // Services
  {
    name: 'CUST_PORT_Service__c',
    label: 'Service',
    group: 'services',
    columns: [
      id(),
      config(),
      lookup('Card_Image__c', 'CUST_PORT_File__c'),
      lookup('Content_Image__c', 'CUST_PORT_File__c'),
      col('Card_Title__c', 'Text(255)'),
      col('Card_Description__c', 'LongText(500)'),
      col('Content_Title__c', 'Text(255)'),
      col('Content_Description__c', 'LongText(2000)'),
      serial(),
    ],
  },
  {
    name: 'CUST_PORT_Service_Process_Step__c',
    label: 'Service Process Step',
    group: 'services',
    columns: [
      id(),
      lookup('Service__c', 'CUST_PORT_Service__c'),
      col('Title__c', 'Text(255)'),
      col('Description__c', 'LongText(500)'),
      serial(),
    ],
  },
  {
    name: 'CUST_PORT_Service_FAQ__c',
    label: 'Service FAQ',
    group: 'services',
    columns: [
      id(),
      lookup('Service__c', 'CUST_PORT_Service__c'),
      col('Question__c', 'LongText(500)'),
      col('Answer__c', 'LongText(2000)'),
      serial(),
    ],
  },

  // Existing HoABL objects, shown only so the relations have somewhere to land
  {
    name: 'Project__c',
    label: 'Project',
    group: 'core',
    description: 'Existing HoABL object. Only the fields relevant to the CMS are shown.',
    columns: [id()],
  },
  {
    name: 'Launch__c',
    label: 'Launch',
    group: 'core',
    description: 'Existing HoABL object. Only the fields relevant to the CMS are shown.',
    columns: [id(), lookup('Project__c', 'Project__c')],
  },
  {
    name: 'Phase__c',
    label: 'Phase',
    group: 'core',
    description: 'Existing HoABL object. Only the fields relevant to the CMS are shown.',
    columns: [id(), lookup('Project__c', 'Project__c')],
  },
];

export const customerPortalCms = {
  slug: 'customer-portal-cms',
  title: 'Customer Portal CMS',
  groups: {
    config: { label: 'Configuration', color: '#0d9488' },
    login: { label: 'Login', color: '#2563eb' },
    offerings: { label: 'Home & Offerings', color: '#ea580c' },
    investment: { label: 'Investment & RERA', color: '#7c3aed' },
    updates: { label: 'Latest Updates', color: '#db2777' },
    services: { label: 'Services', color: '#059669' },
    core: { label: 'HoABL Core', color: '#64748b' },
  },
  entities,
} satisfies ModuleSchema;
