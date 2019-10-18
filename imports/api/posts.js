import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { check } from 'meteor/check';

export const postsSchema = new SimpleSchema({
    // _id use to update a lex
    _id: {
        type: String,
        optional: true,
    },
    description: {
        type: String,
        label: "Description",
        optional: false,
    },
}, { check });

export const Posts = new Mongo.Collection('posts');
