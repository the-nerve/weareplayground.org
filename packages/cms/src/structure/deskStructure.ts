/**
 * This file allows us to build a custom UI structure within Sanity.
 */
import S from '@sanity/desk-tool/structure-builder';

// Icons we are using for our menu UI
import { Layout, Radio, Settings, Zap } from 'react-feather';

import { buildConfigListItem, buildPageListItem } from './builders';

import {
    blogDocumentIDs,
    configDocumentMeta,
    configDocumentIDs,
    pageDocumentIDs,
    theatreDocumentIDs,
} from '../generateDocuments';

// Build Config List Items from generated document meta data
export const configListItems = configDocumentMeta.map(([ID, NAME]) =>
    buildConfigListItem(NAME, ID)
);

// Build Page List Items from generated document meta data
export const pageListItems = pageDocumentIDs.map((documentID) =>
    buildPageListItem(documentID)
);

/**
 * Because we are building a custom Sanity structure, we have to remove all
 * of our documents from the default Sanity document list.
 */
const documentFilterList = [
    ...configDocumentIDs,
    ...blogDocumentIDs,
    ...theatreDocumentIDs,
    ...pageDocumentIDs,
];

export default () =>
    S.list()
        .title('Content Root')
        .items([
            // All global configs
            S.listItem()
                .title('Configs')
                .icon(Settings)
                .child(
                    S.list()
                        .title('Configs')
                        .items(configListItems)
                        .showIcons(false)
                ),
            S.divider(),

            // All blog-related documents
            S.listItem()
                .title('Blog')
                .icon(Radio)
                .child(
                    S.list()
                        .title('Blog')
                        .items([
                            S.documentTypeListItem('author'),
                            S.documentTypeListItem('post'),
                        ])
                ),

            // All theatre-related documents
            S.listItem()
                .title('Theatre')
                .icon(Zap)
                .child(
                    S.list()
                        .title('Theatre')
                        .items([
                            S.documentTypeListItem('show'),
                            S.documentTypeListItem('season'),
                            S.divider(),
                            S.documentTypeListItem('series'),
                            S.documentTypeListItem('artist'),
                            S.documentTypeListItem('location'),
                            S.documentTypeListItem('organization'),
                        ])
                ),

            // All single page documents
            S.listItem()
                .title('Pages')
                .icon(Layout)
                .child(S.list().title('Pages').items(pageListItems)),

            // List out the rest of the document types, but filter out the config type
            ...S.documentTypeListItems().filter(
                (listItem: any) =>
                    !documentFilterList.includes(listItem.getId())
            ),
        ]);
