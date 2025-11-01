const mongoose = require('mongoose');
const slugify = require('slugify');
const validator = require('validator');

const tourSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Tour must have name'],
      unique: true,
      trim: true,
      maxlengthL: [
        40,
        'A Tour name must have less or equal then 40 characters',
      ],
      minlengthL: [
        10,
        'A Tour name must have more or equal then 10 characters',
      ],
      // validate: [validator.isAlpha, 'tour name must only characters '],
    },
    slug: String,
    duration: {
      type: Number,
      required: [true, 'Tour must have a duration'],
    },
    maxGroupSize: {
      type: Number,
      required: [true, 'Tour must have a group size'],
    },
    difficulty: {
      type: String,
      required: [true, 'Tour must have a difficulty'],
      enum: {
        values: ['easy', 'medium', 'difficult'],
        message: 'difficulty must be easy , medium , difficult',
      },
    },
    price: {
      type: Number,
      required: [true, 'Tour must have price'],
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: [1, 'Rating must be above 1.0'],
      max: [5, 'Rating must be bleow 5.0'],
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    priceDiscount: {
      type: Number,
      validate: {
        validator: function (val) {
          return val < this.price;
        },
        message: 'Discount price({VALUE}) should be below price',
      },
    },
    summary: {
      type: String,
      trim: true,
      required: [true, 'Tour must have summary'],
    },
    description: {
      type: String,
      trim: true,
    },
    imageCover: {
      type: String,
      required: true,
    },
    images: [String],
    createAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
    startDates: [Date],
    secrtTour: {
      type: Boolean,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

/// documention middelware
tourSchema.virtual('durationWeeks').get(function () {
  return this.duration / 7;
});
tourSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});
// tourSchema.pre('save', function (next) {
//   console.log('will saved doc ');
//   next();
// });
// tourSchema.post('save', function (doc, next) {
//   (console.log(doc), next());
// });

/// query middelware
tourSchema.pre(/^find/, function (next) {
  this.find({ secrtTour: { $ne: true } });
  this.start = new Date();
  next();
});
tourSchema.post(/^find/, function (doces, next) {
  console.log(`query took ${Date.now() - this.start} milliseconds`);
  next();
});
// aggregtion middelware
tourSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { secrtTour: { $ne: true } } });
  next();
});
const Tour = mongoose.model('Tour', tourSchema);
module.exports = Tour;
