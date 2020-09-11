//
//  Decimal+String.swift
//  SearchDemo
//

import Foundation

extension Decimal {
    var formattedAmount: String {
        let formatter = NumberFormatter()
        formatter.generatesDecimalNumbers = true
        formatter.minimumFractionDigits = 2
        formatter.maximumFractionDigits = 2
        return "$\(formatter.string(from: self as NSDecimalNumber) ?? "")"
    }
}
