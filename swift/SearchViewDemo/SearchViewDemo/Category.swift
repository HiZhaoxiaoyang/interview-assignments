//
//  Category.swift
//  SearchDemo
//

import Foundation

struct Category: Identifiable, Decodable {
    var id: Int
    var brand: String
    var name: String
    var items: [Item]
}
