'use strict';
/** @type {import('sequelize-cli').Migration} */
const { DataTypes } = require ("sequelize");

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('courses', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false
            },
            category: {
                type: DataTypes.STRING,
                allowNull: false
            },
            duration: {
                type: DataTypes.STRING,
                allowNull: false
            },
            author: {
                type: DataTypes.STRING,
                allowNull: false
            },
            image: {
                type: DataTypes.STRING,
                allowNull: true
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('courses');
    }
};