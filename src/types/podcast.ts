export interface PodcastAPIResponse {
    feed: Feed;
  }
  
  export interface Feed {
    author: Author;
    entry: Entry[];
    icon?: Label;
    id?: Label;
    link?: Link[];
    rights?: Label;
    title?: Label;
    updated?: Label;
  }
  
  export interface Author {
    name: Label;
    uri: Label;
  }
  
  export interface Entry {
    "im:artist": Artist;
    "im:contentType": ContentType;
    "im:image": Image[];
    "im:name": Label;
    "im:price": Price;
    "im:releaseDate": ReleaseDate;
    category: Category;
    id: Id;
    link: Link;
    rights?: Label;
    summary: Label;
    title: Label;
  }
  
  interface CommonAttributes {
    label?: string;
    term?: string;
    height?: string;
    href?: string;
    "im:id"?: string;
    scheme?: string;
    amount?: string;
    currency?: string;
    rel?: string;
    type?: string;
  }
  
  interface ContentType {
    attributes: CommonAttributes;
  }
  
  interface Image extends Label {
    attributes: CommonAttributes;
  }
  
  interface Artist extends Label {
    attributes?: CommonAttributes;
  }
  
  interface Category {
    attributes: CommonAttributes;
  }
  
  interface ReleaseDate extends Label {
    attributes: CommonAttributes;
  }
  
  interface Id extends Label {
    attributes: CommonAttributes;
  }
  
  interface Price extends Label {
    attributes: CommonAttributes;
  }
  
  interface Link {
    attributes: CommonAttributes;
  }
  
  interface Label {
    label: string;
  }
  