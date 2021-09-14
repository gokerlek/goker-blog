# WELCOME MY PERSONAL WEBPAGE

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First of all, if [nvm](https://github.com/nvm-sh/nvm) node.js and [npm](https://www.npmjs.com/get-npm) are not installed, please install it.

Then download all the modules below with "npm install".

After the installations are finished

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## You can start now :)

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

## Data Management With Forestry.io

You should use a [forestry.io](https://forestry.io/) application that automatically generates a "JSON" file for project data.

You must map forestry.io to your git repository. [Check out](https://forestry.io/docs/git-sync/) for more information.

You can add and edit site data. For example, if you want to add a new page to the site, you will do it here. Likewise, if you want to add any content you will use "forestry.io".

## Site Tour

The site basically consists of three parts. These are the layout, header, and footer.

1. **Layout:** Contains the content of the pages. The basic structure of the pages is determined here.There are a header, a children structure, and a footer in the layout. Any item can be included in the [children structure](https://nextjs.org/docs/api-reference/next/router).
2. **Header:** Contains menu and logo elements.
   1. **Logo:** it is embedded in the page does not receive external data. If you want to make changes on the logo, you should examine the logo.js component.
   2. **Menu:** You can switch between pages with the menu. If you want a new menu tab, just add it with forestry.io.
3. **Footer:** Includes brief information about me and my social media links.

There are five types of pages on the site.

1. **Home Page**
   The home page consists of a short introduction article, the last post shared, and the challenge of the day.
   If you want to make changes on the home page, you should examine the /index.js file.
2. **Blog Page**
   The blog page is a list of brief information about my works.
   If you want to make changes on the blog page, you should examine the /blog.js file.
3. **Project Page**
   The project page is a list of brief information about my /project.
   If you want to make changes on the blog page, you should examine the /project.js file.
4. **Slug Page**
   It is the file in which pages such as "about me" are arranged on the site. If you want to add a new page, you can create a new page via "forestry.io". It will automatically be created in the "about me" format on the site.
   If you want to make changes on the slug page, you should examine the /slug.js file.
5. **Post Page**
   It is the page where the articles you created in "Forestry.io" appear. It can be accessed from the summary information on the blog page. they do not appear on the menu. You can access the next and previous articles from the links at the bottom of the page.
   If you want to make changes on the post page, you should examine the /post/slug.js file.
